<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseInquiry;
use Illuminate\Http\Request;

class CourseInquiryController extends Controller
{
  /**
   * Display a listing of course inquiries with payment status.
   *
   * @return \Illuminate\View\View
   */
  public function index()
  {
    $inquiries = CourseInquiry::latest()->paginate(10);
    return view('admin.course_inquiries.index', compact('inquiries'));
  }

  /**
   * Display the specified course inquiry.
   *
   * @param  int  $id
   * @return \Illuminate\View\View
   */
  public function show($id)
  {
    $inquiry = CourseInquiry::findOrFail($id);
    return view('admin.course_inquiries.show', compact('inquiry'));
  }
}
