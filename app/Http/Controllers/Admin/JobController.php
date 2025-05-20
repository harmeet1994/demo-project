<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobMaster;
use Illuminate\Http\Request;

class JobController extends Controller
{
  public function index()
  {
    $jobs = JobMaster::latest()->paginate(10);

    return view('admin.jobs.index', compact('jobs'));
  }

  public function create()
  {
    return view('admin.jobs.create');
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'company_name' => 'required|string|max:255',
      'location' => 'required|string|max:255',
      'description' => 'required|string',
      'requirements' => 'required|string',
      'status' => 'required|in:Draft,Published',
      'category' => 'required|string|max:255',
    ]);

    JobMaster::create($validated);

    return redirect()->route('admin.jobs.index')
      ->with('success', 'Job created successfully');
  }

  public function edit(JobMaster $job)
  {
    return view('admin.jobs.edit', compact('job'));
  }

  public function update(Request $request, JobMaster $job)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'company_name' => 'required|string|max:255',
      'location' => 'required|string|max:255',
      'description' => 'required|string',
      'requirements' => 'required|string',
      'status' => 'required|in:Draft,Published',
      'category' => 'required|string|max:255',
    ]);

    $job->update($validated);

    return redirect()->route('admin.jobs.index')
      ->with('success', 'Job updated successfully');
  }

  public function destroy(JobMaster $job)
  {
    $job->delete();

    return redirect()->route('admin.jobs.index')
      ->with('success', 'Job deleted successfully');
  }
}
