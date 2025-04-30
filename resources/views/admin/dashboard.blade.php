@extends('layouts.admin')

@section('title', 'Dashboard')
@section('header', 'Dashboard')

@section('content')
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-blue-500 bg-opacity-10">
      <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
        </path>
      </svg>
      </div>
      <div class="ml-4">
      <h2 class="text-gray-600 text-sm">Total Jobs</h2>
      <p class="text-2xl font-semibold text-gray-800">{{ $stats['total_jobs'] }}</p>
      </div>
    </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-green-500 bg-opacity-10">
      <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      </div>
      <div class="ml-4">
      <h2 class="text-gray-600 text-sm">Published Jobs</h2>
      <p class="text-2xl font-semibold text-gray-800">{{ $stats['published_jobs'] }}</p>
      </div>
    </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-yellow-500 bg-opacity-10">
      <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
        </path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
        </path>
      </svg>
      </div>
      <div class="ml-4">
      <h2 class="text-gray-600 text-sm">Draft Jobs</h2>
      <p class="text-2xl font-semibold text-gray-800">{{ $stats['draft_jobs'] }}</p>
      </div>
    </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-purple-500 bg-opacity-10">
      <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15">
        </path>
      </svg>
      </div>
      <div class="ml-4">
      <h2 class="text-gray-600 text-sm">Total Blogs</h2>
      <p class="text-2xl font-semibold text-gray-800">{{ $stats['total_blogs'] }}</p>
      </div>
    </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="bg-white rounded-lg shadow">
    <div class="p-4 border-b border-gray-200">
      <h3 class="text-lg font-medium">Recent Jobs</h3>
    </div>
    <div class="p-4">
      <div class="space-y-4">
      @foreach($recent_jobs as $job)
      <div class="flex items-center justify-between">
      <div>
      <h4 class="text-sm font-medium text-gray-900">{{ $job->title }}</h4>
      <p class="text-sm text-gray-500">{{ $job->company_name }}</p>
      </div>
      <span
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {{ $job->status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800' }}">
      {{ $job->status }}
      </span>
      </div>
    @endforeach
      </div>
    </div>
    </div>

    <div class="bg-white rounded-lg shadow">
    <div class="p-4 border-b border-gray-200">
      <h3 class="text-lg font-medium">Recent Blogs</h3>
    </div>
    <div class="p-4">
      <div class="space-y-4">
      @foreach($recent_blogs as $blog)
      <div class="flex items-center justify-between">
      <div>
      <h4 class="text-sm font-medium text-gray-900">{{ $blog->Blog_title }}</h4>
      <p class="text-sm text-gray-500">{{ $blog->Blog_publish_date }}</p>
      </div>

      </div>
    @endforeach
      </div>
    </div>
    </div>
  </div>
@endsection
