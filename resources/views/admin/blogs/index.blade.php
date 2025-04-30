@extends('layouts.admin')

@section('title', 'Blogs Management')
@section('header', 'Blogs Management')

@section('content')
  <div class="bg-white rounded-lg shadow-sm">
    <div class="p-4 border-b border-gray-200">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-medium">All Blogs</h3>
      <a href="{{ route('admin.blogs.create') }}" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Add New Blog
      </a>
    </div>
    </div>

    @if(session('success'))
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 mx-4 mt-4"
    role="alert">
    <span class="block sm:inline">{{ session('success') }}</span>
    </div>
  @endif

    <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>

        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publish Date</th>

        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      @foreach($blogs as $blog)
      <tr>

      <td class="px-6 py-4 whitespace-nowrap">{{ $blog->Blog_title }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ $blog->Blog_publish_date ?? 'N/A' }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ $blog->BlogType }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm">
      <a href="/admin/blogs/{{ $blog->ID }}/edit" class="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
      <a href="/admin/blogs/{{ $blog->ID }}" class="text-green-600 hover:text-green-900 mr-3">View</a>
      <form action="/admin/blogs/{{ $blog->ID }}" method="POST" class="inline">
        @csrf
        @method('DELETE')
        <button type="submit" class="text-red-600 hover:text-red-900"
        onclick="return confirm('Are you sure you want to delete this blog?')">Delete</button>
      </form>
      </td>
      </tr>
    @endforeach

      @if(count($blogs) === 0)
      <tr>
      <td colspan="6" class="px-6 py-4 text-center text-gray-500">No blogs found</td>
      </tr>
    @endif
      </tbody>
    </table>
    </div>

    <div class="px-6 py-4">
    {{ $blogs->links() }}
    </div>
  </div>
@endsection
