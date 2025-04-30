@extends('layouts.admin')

@section('title', 'Edit Blog')
@section('header', 'Edit Blog')

@push('styles')
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
  <style>
    .quill-editor {
    height: 400px;
    }

    .ql-editor {
    min-height: 380px;
    }
  </style>
@endpush

@section('content')
  <div class="bg-white rounded-lg shadow-sm">
    <form action="{{ route('admin.blogs.update', $blog->ID) }}" method="POST" class="p-6" enctype="multipart/form-data"
    id="blogForm">
    @csrf
    @method('PUT')

    <div class="space-y-6">
      <div>
      <label for="Blog_title" class="block text-sm font-medium text-gray-700">Blog Title</label>
      <input type="text" name="Blog_title" id="Blog_title" value="{{ old('Blog_title', $blog->Blog_title) }}"
        class="mt-1 block w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
      @error('Blog_title')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="Blog_desc" class="block text-sm font-medium text-gray-700 mb-1">Blog Description</label>
      <div id="quill-editor" class="quill-editor"></div>
      <input type="hidden" name="Blog_desc" id="Blog_desc" value="{{ old('Blog_desc', $blog->Blog_desc) }}">
      @error('Blog_desc')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="Blog_publish_date" class="block text-sm font-medium text-gray-700">Publish Date</label>
      <input type="date" name="Blog_publish_date" id="Blog_publish_date"
        value="{{ old('Blog_publish_date', $blog->Blog_publish_date ? date('Y-m-d', strtotime($blog->Blog_publish_date)) : '') }}"
        class="mt-1 block w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
      @error('Blog_publish_date')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="custom_url" class="block text-sm font-medium text-gray-700">Custom URL</label>
      <input type="text" name="custom_url" id="custom_url" value="{{ old('custom_url', $blog->custom_url) }}"
        class="mt-1 block w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
      @error('custom_url')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="BlogType" class="block text-sm font-medium text-gray-700">Blog Type</label>
      <input type="text" name="BlogType" id="BlogType" value="{{ old('BlogType', $blog->BlogType) }}"
        class="mt-1 block w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
      @error('BlogType')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="Blog_image" class="block text-sm font-medium text-gray-700">Blog Image</label>
      @if($blog->Blog_image)
      <div class="mb-3">
      <img src="{{ asset('assets/img/blog-images/' . $blog->Blog_image) }}" alt="Current Blog Image"
      class="h-32 w-auto object-cover">
      <p class="text-sm text-gray-500 mt-1">Current image</p>
      </div>
    @endif
      <input type="file" name="Blog_image" id="Blog_image"
        class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
      @error('Blog_image')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div class="flex justify-end space-x-3">
      <a href="{{ route('admin.blogs.index') }}"
        class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Cancel
      </a>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Update Blog
      </button>
      </div>
    </div>
    </form>
  </div>
@endsection

@push('scripts')
  <script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
    var quill = new Quill('#quill-editor', {
      theme: 'snow',
      modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'image'],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['clean']
      ]
      },
      placeholder: 'Write your blog content here...'
    });

    // Set initial content from the hidden input (which has the existing blog content)
    const content = document.getElementById('Blog_desc').value;
    if (content) {
      quill.root.innerHTML = content;
    }

    // On form submit, update the hidden input with Quill content
    document.getElementById('blogForm').addEventListener('submit', function () {
      document.getElementById('Blog_desc').value = quill.root.innerHTML;
    });
    });
  </script>
@endpush
