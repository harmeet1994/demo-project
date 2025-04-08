<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\JobMaster;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_jobs' => JobMaster::count(),
            'published_jobs' => JobMaster::where('status', 'Published')->count(),
            'draft_jobs' => JobMaster::where('status', 'Draft')->count(),
            'total_blogs' => Blog::count(),
        ];

        $recent_jobs = JobMaster::latest()->take(5)->get();
        $recent_blogs = Blog::take(5)->get();

        return view('admin.dashboard', compact('stats', 'recent_jobs', 'recent_blogs'));
    }
}
