@extends('layouts.admin')

@section('title', 'Edit Job')
@section('header', 'Edit Job')

@push('styles')
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
  <style>
    .quill-editor {
    height: 300px;
    }

    .ql-editor {
    min-height: 280px;
    }
  </style>
@endpush

@section('content')
  <div class="bg-white rounded-lg shadow-sm">
    <form action="{{ route('admin.jobs.update', $job->id) }}" method="POST" class="p-6" id="jobForm">
    @csrf
    @method('PUT')

    <div class="space-y-6">
      <div>
      <label for="title" class="block text-sm font-medium text-gray-700">Job Title</label>
      <input type="text" name="title" id="title" value="{{ old('title', $job->title) }}"
        class="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
      @error('title')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="company_name" class="block text-sm font-medium text-gray-700">Company Name</label>
      <input type="text" name="company_name" id="company_name" value="{{ old('company_name', $job->company_name) }}"
        class="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
      @error('company_name')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
      <input type="text" name="location" id="location" value="{{ old('location', $job->location) }}"
        class="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
      @error('location')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
      <select name="category" id="category"
        class="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
        <option value="">Select Category</option>
        <option value="Full Time" {{ old('category', $job->category) == 'Full Time' ? 'selected' : '' }}>Full Time
        </option>
        <option value="Part Time" {{ old('category', $job->category) == 'Part Time' ? 'selected' : '' }}>Part Time
        </option>
        <option value="Contract" {{ old('category', $job->category) == 'Contract' ? 'selected' : '' }}>Contract</option>
        <option value="Internship" {{ old('category', $job->category) == 'Internship' ? 'selected' : '' }}>Internship
        </option>
      </select>
      @error('category')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
      <div id="description-editor" class="quill-editor"></div>
      <input type="hidden" name="description" id="description" value="{{ old('description', $job->description) }}">
      @error('description')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="requirements" class="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
      <div id="requirements-editor" class="quill-editor"></div>
      <input type="hidden" name="requirements" id="requirements"
        value="{{ old('requirements', $job->requirements) }}">
      @error('requirements')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div>
      <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
      <select name="status" id="status"
        class="mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required>
        <option value="Draft" {{ old('status', $job->status) == 'Draft' ? 'selected' : '' }}>Draft</option>
        <option value="Published" {{ old('status', $job->status) == 'Published' ? 'selected' : '' }}>Published</option>
      </select>
      @error('status')
      <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
    @enderror
      </div>

      <div class="flex justify-end space-x-3">
      <a href="{{ route('admin.jobs.index') }}"
        class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Cancel
      </a>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Update Job
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
    // Create the job description editor
    var descriptionEditor = new Quill('#description-editor', {
      theme: 'snow',
      modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link'],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['clean']
      ]
      },
      placeholder: 'Write job description here...'
    });

    // Create the requirements editor
    var requirementsEditor = new Quill('#requirements-editor', {
      theme: 'snow',
      modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link'],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['clean']
      ]
      },
      placeholder: 'Write job requirements here...'
    });

    // Set initial content for description from the hidden input
    const descContent = document.getElementById('description').value;
    if (descContent) {
      descriptionEditor.root.innerHTML = descContent;
    }

    // Set initial content for requirements from the hidden input
    const reqContent = document.getElementById('requirements').value;
    if (reqContent) {
      requirementsEditor.root.innerHTML = reqContent;
    }

    // On form submit, update the hidden inputs with Quill content
    document.getElementById('jobForm').addEventListener('submit', function () {
      document.getElementById('description').value = descriptionEditor.root.innerHTML;
      document.getElementById('requirements').value = requirementsEditor.root.innerHTML;
    });
    });
  </script>
@endpush
