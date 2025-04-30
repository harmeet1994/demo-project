@extends('layouts.admin')

@section('title', 'Application Details')
@section('header', 'Application Details')

@section('content')
  <div class="bg-white rounded-lg shadow-sm">
    <div class="p-6 space-y-6">
    @if(session('success'))
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
      <span class="block sm:inline">{{ session('success') }}</span>
    </div>
  @endif

    <div class="flex justify-between items-center border-b pb-4">
      <h1 class="text-2xl font-bold text-gray-800">Application for {{ $application->job_title }}</h1>
      <div>
      <a href="{{ route('admin.applications.index') }}"
        class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Back to Applications
      </a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2 space-y-6">
      <!-- Applicant Information -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Applicant Information</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium text-gray-500">Email</p>
          <p class="mt-1">{{ $application->email }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Phone</p>
          <p class="mt-1">{{ $application->phone ?? 'Not provided' }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">LinkedIn</p>
          <p class="mt-1">
          @if($application->linked_in)
        <a href="{{ $application->linked_in }}" target="_blank" class="text-blue-600 hover:underline">LinkedIn
        Profile</a>
      @else
      Not provided
    @endif
          </p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Applicant ID</p>
          <p class="mt-1">{{ $application->applicant_id ?? 'Not available' }}</p>
        </div>
        </div>
      </div>

      <!-- Resume and Cover Letter -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Application Documents</h2>

        <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-gray-500">Resume</p>
          @if($application->resume_url)
        <div class="mt-2">
        <a href="{{ $application->resume_url }}" target="_blank"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
        View Resume
        </a>
        </div>
      @else
      <p class="mt-1 text-gray-500">No resume uploaded</p>
    @endif
        </div>

        @if($application->cover_letter)
      <div>
        <p class="text-sm font-medium text-gray-500">Cover Letter</p>
        <div class="mt-2 p-4 bg-white border rounded-md">
        {!! nl2br(e($application->cover_letter)) !!}
        </div>
      </div>
    @endif
        </div>
      </div>
      </div>

      <div class="space-y-6">
      <!-- Job Information -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Job Information</h2>
        <div class="space-y-3">
        <div>
          <p class="text-sm font-medium text-gray-500">Company</p>
          <p class="mt-1">{{ $application->company_name }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Location</p>
          <p class="mt-1">{{ $application->location }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Category</p>
          <p class="mt-1">{{ $application->category }}</p>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Applied On</p>
          <p class="mt-1">
          {{ $application->applied_at ? date('F d, Y', strtotime($application->applied_at)) : 'N/A' }}
          </p>
        </div>
        </div>
      </div>

      <!-- Application Status -->

      </div>
    </div>

    <!-- Job Description -->
    <div class="border-t pt-6 mt-6">
      <h2 class="text-lg font-medium text-gray-900 mb-4">Job Description</h2>
      <div class="prose max-w-none">
      {!! $application->description !!}
      </div>
    </div>

    <!-- Job Requirements -->
    <div class="border-t pt-6 mt-6">
      <h2 class="text-lg font-medium text-gray-900 mb-4">Job Requirements</h2>
      <div class="prose max-w-none">
      {!! $application->requirements !!}
      </div>
    </div>
    </div>
  </div>
@endsection
