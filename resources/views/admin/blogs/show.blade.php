@extends('layouts.admin')

@section('title', 'View Blog')
@section('header', 'Blog Details')

@section('content')
  <div class="bg-white rounded-lg shadow-sm">
    <div class="p-6 space-y-6">
    <div class="flex justify-between items-center border-b pb-4">
      <h1 class="text-2xl font-bold text-gray-800">{{ $blog->Blog_title }}</h1>
      <div class="flex space-x-2">
      <a href="{{ route('blogs.edit', $blog->ID) }}"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Edit
      </a>
      <a href="{{ route('blogs.index') }}"
        class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Back to List
      </a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2 space-y-6">
      <div>
        <h2 class="text-lg font-medium text-gray-900 mb-2">Description</h2>
        <div class="prose max-w-none">
        {!! $blog->Blog_desc !!}
        </div>
      </div>

      <div class="mt-6">
        <h2 class="text-lg font-medium text-gray-900 mb-2">Details</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium text-gray-500">Publish Date</p>
          <p class="mt-1">{{ $blog->Blog_publish_date }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Blog Type</p>
          <p class="mt-1">{{ $blog->BlogType }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Custom URL</p>
          <p class="mt-1 break-all">{{ $blog->custom_url }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">GUID</p>
          <p class="mt-1 break-all">{{ $blog->guid }}</p>
        </div>
        </div>
      </div>
      </div>

      <div>
      <h2 class="text-lg font-medium text-gray-900 mb-2">Blog Image</h2>
      @if($blog->Blog_image)
      <div class="mt-2 border rounded-lg overflow-hidden">
      <img src="{{ asset('assets/img/blog-images/' . $blog->Blog_image) }}" alt="Blog Image" class="w-full h-auto">
      </div>
    @else
      <div class="mt-2 p-12 border rounded-lg text-center text-gray-500">
      No image available
      </div>
    @endif
      </div>
    </div>

    <div class="border-t pt-6 mt-6">
      <form action="{{ route('blogs.destroy', $blog->ID) }}" method="POST" class="inline"
      onsubmit="return confirm('Are you sure you want to delete this blog?')">
      @csrf
      @method('DELETE')
      <button type="submit" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Delete Blog
      </button>
      </form>
    </div>
    </div>
  </div>
@endsection
