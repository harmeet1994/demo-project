@extends('layouts.admin')

@section('title', 'Course Inquiry Details')

@section('content')
  <div class="container mx-auto px-6 py-8">
    <div class="flex items-center mb-6">
    <a href="{{ route('admin.course-inquiries.index') }}" class="text-blue-600 hover:text-blue-800 mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24"
      stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Course Inquiries
    </a>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <div class="border-b p-6">
      <h2 class="text-2xl font-semibold text-gray-800">Course Inquiry #{{ $inquiry->id }}</h2>
      <p class="text-sm text-gray-600">Submitted on {{ $inquiry->created_at->format('F d, Y \a\t h:i A') }}</p>
    </div>

    <div class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Personal Information -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Personal Information</h3>
        <div class="space-y-3">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500">Name</span>
          <span class="font-medium">{{ $inquiry->name }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-500">Email</span>
          <span class="font-medium">{{ $inquiry->email }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-500">Phone</span>
          <span class="font-medium">{{ $inquiry->phone }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-500">Course Type</span>
          <span
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  {{ $inquiry->course_type == 'corporate' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800' }}">
          {{ ucfirst($inquiry->course_type) }}
          </span>
        </div>
        </div>
      </div>

      <!-- Payment Information -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Payment Information</h3>
        <div class="space-y-3">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500">Payment Status</span>
          <span
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  {{ $inquiry->payment_status == 'paid' ? 'bg-green-100 text-green-800' :
    ($inquiry->payment_status == 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800') }}">
          {{ $inquiry->payment_status ? ucfirst($inquiry->payment_status) : 'Pending' }}
          </span>
        </div>
        @if($inquiry->transaction_id)
      <div class="flex flex-col">
        <span class="text-sm text-gray-500">Transaction ID</span>
        <span class="font-medium">{{ $inquiry->transaction_id }}</span>
      </div>
      @endif
        </div>
      </div>
      </div>

      @if(!empty($inquiry->payment_info))
      <!-- Payment Details -->
      <div class="mt-6">
      <h3 class="text-lg font-semibold text-gray-700 mb-4">Payment Details</h3>
      <div class="bg-gray-50 p-6 rounded-lg overflow-x-auto">
      <pre class="text-xs">{{ json_encode(json_decode($inquiry->payment_info), JSON_PRETTY_PRINT) }}</pre>
      </div>
      </div>
    @endif
    </div>
    </div>
  </div>
@endsection
