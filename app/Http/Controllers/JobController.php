<?php

namespace App\Http\Controllers;

use App\Models\JobApplication;
use App\Models\JobInteraction;
use App\Models\JobMaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Auth;

class JobController extends Controller
{
    public function index(Request $request)
    {
        $query = JobMaster::query();
        $userID = Auth::user() !== null ? Auth::user()->id : 0;
                
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        if ($request->has('location')) {
            $query->where('location', 'like', '%'.$request->location.'%');
        }

        if ($request->has('job_type')) {
            $query->where('job_type', $request->job_type);
        }

        if ($request->has('experience_level')) {
            $query->where('experience_level', $request->experience_level);
        }

        if ($request->has('is_remote')) {
            $query->where('is_remote', $request->is_remote === 'true');
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('company_name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Sort options
        $sortField = $request->sort_by ?? 'published_at';
        $sortDirection = $request->sort_direction ?? 'desc';
        $query->orderBy($sortField, $sortDirection);
        if($userID > 0){
            $query->leftJoin('user_job_interactions', function($join) use ($userID)
            {
                $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
                $join->where('user_job_interactions.user_id','=',$userID);
            });
        }else{
            $query->leftJoin('user_job_interactions', function($join) use ($userID)
        {
            $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
        });
        }
        
        $query->selectRaw('job_masters.*,'.($userID > 0 ? 'user_job_interactions.id':0).' as job_interaction');
        $perPage = $request->per_page ?? 10;
        $jobs = $query->paginate($perPage);

        return response()->json($jobs);
    }

    public function saveJob(Request $request)
    {
        $userID = auth()->user()->id;
        $jobID = $request->job_id;
        $jobInteraction = JobInteraction::where('job_id', '=', $jobID)
            ->where('user_id', '=', $userID)
            ->first();
        if ($jobInteraction != null) {
            $jobInteraction->delete();
        } else {
            $jobInteraction = new JobInteraction;
            $jobInteraction->job_id = $jobID;
            $jobInteraction->user_id = $userID;
            $jobInteraction->is_saved = 1;
            $jobInteraction->save();
        }

    }


    public function jobDetails(Request $request)
    {
        $jobID = $request->id;
        $query = JobMaster::query();
        $query->where("job_masters.id","=",$jobID);
        $userID = Auth::user() !== null ? Auth::user()->id : 0;

        // Sort options
        $sortField = $request->sort_by ?? 'published_at';
        $sortDirection = $request->sort_direction ?? 'desc';
        $query->orderBy($sortField, $sortDirection);
        if($userID > 0){
            $query->leftJoin('user_job_interactions', function($join) use ($userID)
            {
                $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
                $join->where('user_job_interactions.user_id','=',$userID);
            });
        }else{
            $query->leftJoin('user_job_interactions', function($join) use ($userID)
            {
                $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
            });
        }
        
        $query->selectRaw('job_masters.*,'.($userID > 0 ? 'user_job_interactions.id':0).' as job_interaction');
        $jobs = $query->first();

        $jobs->created_ago = Carbon::parse($jobs->created_at)->diffForHumans();

        return response()->json($jobs);
    }


    public function saveJobForm(Request $request)  {
        $resumeFile = $request->file('resume');
        $fileName = time() . '_' . $resumeFile->getClientOriginalName();
        $destinationPath = public_path('resumes');

        // Create the folder if it doesn't exist
        if (!file_exists($destinationPath)) {
            mkdir($destinationPath, 0755, true);
        }

        // Move the file to the public/resumes directory
        $resumeFile->move($destinationPath, $fileName);

        // Generate the URL for the uploaded file
        $resumeUrl = '/resumes/' . $fileName;
        $jobApplication = JobApplication::create([
            'job_id'       => $request->job_id,
            'applicant_id' => Auth::user()->id,
            
            'resume_url'   => $resumeUrl,
            'cover_letter' => $request->cover_letter,
            'status'       => 'Applied'
        ]);
    }

}
