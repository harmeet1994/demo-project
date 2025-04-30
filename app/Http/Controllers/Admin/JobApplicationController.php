<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JobApplicationController extends Controller
{
  /**
   * Display a listing of job applications.
   */
  public function index()
  {
    $applications = DB::table('user_job_applications')
      ->join('job_masters', 'user_job_applications.job_id', '=', 'job_masters.id')
      ->select(
        'user_job_applications.*',
        'job_masters.title as job_title',
        'job_masters.company_name'
      )
      ->orderBy('user_job_applications.applied_at', 'desc')
      ->paginate(15);

    return view('admin.applications.index', compact('applications'));
  }

  /**
   * Display the specified job application.
   */
  public function show($id)
  {
    $application = DB::table('user_job_applications')
      ->join('job_masters', 'user_job_applications.job_id', '=', 'job_masters.id')
      ->select(
        'user_job_applications.*',
        'job_masters.title as job_title',
        'job_masters.company_name',
        'job_masters.location',
        'job_masters.category',
        'job_masters.description',
        'job_masters.requirements'
      )
      ->where('user_job_applications.id', $id)
      ->first();

    if (!$application) {
      abort(404);
    }

    return view('admin.applications.show', compact('application'));
  }

  /**
   * Update the application status.
   */
  public function updateStatus(Request $request, $id)
  {
    $request->validate([
      'status' => 'required|in:pending,reviewed,shortlisted,rejected,hired'
    ]);

    DB::table('user_job_applications')
      ->where('id', $id)
      ->update([
        'status' => $request->status,
        'updated_at' => now()
      ]);

    return redirect()->route('admin.applications.show', $id)
      ->with('success', 'Application status updated successfully.');
  }
}
