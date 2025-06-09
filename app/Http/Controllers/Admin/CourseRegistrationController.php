<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseRegistration;
use Illuminate\Http\Request;

class CourseRegistrationController extends Controller
{
    /**
     * Display a listing of the course registrations.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $registrations = CourseRegistration::orderBy('created_at', 'desc')->paginate(10);
        
        return view('admin.course_registrations.index', compact('registrations'));
    }

    /**
     * Display the specified course registration.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $registration = CourseRegistration::findOrFail($id);
        
        return view('admin.course_registrations.show', compact('registration'));
    }
}
