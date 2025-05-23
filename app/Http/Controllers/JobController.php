<?php

namespace App\Http\Controllers;

use App\Models\JobApplication;
use App\Models\JobInteraction;
use App\Models\JobMaster;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{
  public function index(Request $request)
  {
    $query = JobMaster::query();
    $userID = Auth::user() !== null ? Auth::user()->id : 0;

    if ($request->has('status')) {
      $query->where('status', $request->status);
    }

    if ($request->has('location') && $request->location != null) {
      $query->where(DB::raw('LOWER(location)'), 'like', '%' . strtolower($request->location) . '%');
    }
    if ($request->has('category') && $request->category != null) {
      $query->where('category', '=', $request->category);
    }

    if ($request->post_filter) {

      switch ($request->post_filter) {
        case 'Recent Post':
          $query->orderByDesc('job_masters.created_at');
          break;
        case 'Active':
          $query->where('status', ['Published']);
          break;
        case 'Saved':
          if ($userID > 0) {
            $jobIDs = JobInteraction::where('user_id', '=', $userID)
              ->where('is_saved', '=', 1)
              ->orderByDesc('id')
              ->pluck('job_id');
            $query->whereIn('job_masters.id', $jobIDs);
          }
          break;
        case 'Applied':
          if ($userID > 0) {
            $jobIDs = DB::table('user_job_applications')
              ->where('applicant_id', '=', $userID)
              ->groupBy('job_id')
              ->pluck('job_id');
            $query->whereIn('job_masters.id', $jobIDs);
          }
          break;

        default:

          break;
      }
    }

    if ($request->has('search') && $request->search) {
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
    if ($userID > 0) {
      $query->leftJoin('user_job_interactions', function ($join) use ($userID) {
        $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
        $join->where('user_job_interactions.user_id', '=', $userID);
      });
    } else {
      $query->leftJoin('user_job_interactions', function ($join) {
        $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
      });
    }

    $query->selectRaw('job_masters.*,' . ($userID > 0 ? 'user_job_interactions.id' : 0) . ' as job_interaction');
    $query->where("job_masters.status", "Published");
    $perPage = $request->per_page ?? 10;
    $query->orderByDesc('created_at');
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
    $query->where('job_masters.id', '=', $jobID);
    $userID = Auth::user() !== null ? Auth::user()->id : 0;

    // Sort options
    $sortField = $request->sort_by ?? 'published_at';
    $sortDirection = $request->sort_direction ?? 'desc';
    $query->orderBy($sortField, $sortDirection);
    if ($userID > 0) {
      $query->leftJoin('user_job_interactions', function ($join) use ($userID) {
        $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
        $join->where('user_job_interactions.user_id', '=', $userID);
      });
    } else {
      $query->leftJoin('user_job_interactions', function ($join) {
        $join->on('job_masters.id', '=', 'user_job_interactions.job_id');
      });
    }

    $query->selectRaw('job_masters.*,' . ($userID > 0 ? 'user_job_interactions.id' : 0) . ' as job_interaction');
    $jobs = $query->first();

    $jobs->created_ago = Carbon::parse($jobs->created_at)->diffForHumans();

    return response()->json($jobs);
  }

  public function saveJobForm(Request $request)
  {
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
      'job_id' => $request->job_id,
      'applicant_id' => Auth::user()->id,
      'email' => $request->email,
      'phone' => $request->phone,
      'linked_in' => $request->linkedIn,
      'resume_url' => $resumeUrl,
      'cover_letter' => $request->cover_letter,
      'status' => 'Applied',
    ]);
  }

  public function store(Request $request)
  {
    try {
      $validated = $request->validate([
        'title' => 'required|string|max:255',
        'company_name' => 'required|string|max:255',
        'company_logo' => 'nullable|string|max:255',
        'category' => 'required|string|in:Full Time,Part Time,Contract,Internship',
        'location' => 'required|string|max:255',
        'description' => 'required|string',
        'requirements' => 'nullable|string',
        'responsibilities' => 'nullable|string',
        'salary_range' => 'nullable|string|max:255',
        'tags' => 'nullable|array',
        'status' => 'required|string|in:draft,published',
        'expires_at' => 'nullable|date|after:today',
      ]);

      $job = JobMaster::create([
        'title' => $validated['title'],
        'company_name' => $validated['company_name'],
        'company_logo' => $validated['company_logo'] ?? null,
        'category' => $validated['category'],
        'location' => $validated['location'],
        'description' => $validated['description'],
        'requirements' => $validated['requirements'] ?? null,
        'responsibilities' => $validated['responsibilities'] ?? null,
        'salary_range' => $validated['salary_range'] ?? null,
        'tags' => !empty($validated['tags']) ? json_encode($validated['tags']) : null,
        'status' => $validated['status'],
        'published_by' => Auth::id(),
        'published_at' => $validated['status'] === 'published' ? now() : null,
        'expires_at' => $validated['expires_at'] ?? now()->addMonths(1),
        'view_count' => 0,
        'application_count' => 0,
        'is_posted_manually' => 1
      ]);

      return response()->json([
        'success' => true,
        'message' => 'Job saved successfully',
        'data' => $job
      ]);
    } catch (\Exception $e) {
      return response()->json([
        'success' => false,
        'message' => 'Failed to save job: ' . $e->getMessage()
      ], 500);
    }
  }
}
