<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\File;

class BlogController extends Controller
{
  /**
   * Display a listing of the blogs.
   */
  public function index()
  {
    $blogs = Blog::latest()->paginate(10);
    return view('admin.blogs.index', compact('blogs'));
  }

  /**
   * Show the form for creating a new blog.
   */
  public function create()
  {
    return view('admin.blogs.create');
  }

  /**
   * Store a newly created blog in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'Blog_title' => 'required',
      'Blog_desc' => 'required',
      'Blog_publish_date' => 'required|date',
      'custom_url' => 'required',
      'BlogType' => 'required',
      'Blog_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $data = $request->all();

    if ($request->hasFile('Blog_image')) {
      // Ensure directory exists
      $path = public_path('assets/img/blog-images');
      if (!File::isDirectory($path)) {
        File::makeDirectory($path, 0777, true);
      }

      $image = $request->file('Blog_image');
      $imageName = time() . '_' . $image->getClientOriginalName();
      $image->move($path, $imageName);

      $data['Blog_image'] = $imageName;
    }

    Blog::create($data);

    return redirect()->route('admin.blogs.index')
      ->with('success', 'Blog created successfully.');
  }

  /**
   * Display the specified blog.
   */
  public function show(Blog $blog)
  {
    return view('admin.blogs.show', compact('blog'));
  }

  /**
   * Show the form for editing the specified blog.
   */
  public function edit(Blog $blog)
  {
    return view('admin.blogs.edit', compact('blog'));
  }

  /**
   * Update the specified blog in storage.
   */
  public function update(Request $request, Blog $blog)
  {
    $request->validate([
      'Blog_title' => 'required',
      'Blog_desc' => 'required',
      'Blog_publish_date' => 'required|date',
      'custom_url' => 'required',
      'BlogType' => 'required',
      'Blog_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $data = $request->all();

    if ($request->hasFile('Blog_image')) {
      // Delete old image if it exists
      if ($blog->Blog_image && file_exists(public_path($blog->Blog_image))) {
        File::delete(public_path($blog->Blog_image));
      }

      // Ensure directory exists
      $path = public_path('assets/img/blog-images');
      if (!File::isDirectory($path)) {
        File::makeDirectory($path, 0777, true);
      }

      $image = $request->file('Blog_image');
      $imageName = time() . '_' . $image->getClientOriginalName();
      $image->move($path, $imageName);

      $data['Blog_image'] = $imageName;
    }

    $blog->update($data);

    return redirect()->route('admin.blogs.index')
      ->with('success', 'Blog updated successfully.');
  }

  /**
   * Remove the specified blog from storage.
   */
  public function destroy(Blog $blog)
  {
    // Delete image if it exists
    if ($blog->Blog_image && file_exists(public_path($blog->Blog_image))) {
      File::delete(public_path($blog->Blog_image));
    }

    $blog->delete();

    return redirect()->route('admin.blogs.index')
      ->with('success', 'Blog deleted successfully.');
  }
}
