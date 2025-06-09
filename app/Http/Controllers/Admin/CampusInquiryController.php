<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CampusInquiry;
use Illuminate\Http\Request;

class CampusInquiryController extends Controller
{
    /**
     * Display a listing of the campus inquiries.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $inquiries = CampusInquiry::orderBy('created_at', 'desc')->paginate(15);
        
        return view('admin.campus_inquiries.index', compact('inquiries'));
    }

    /**
     * Display the specified campus inquiry.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $inquiry = CampusInquiry::findOrFail($id);
        
        return view('admin.campus_inquiries.show', compact('inquiry'));
    }
}
