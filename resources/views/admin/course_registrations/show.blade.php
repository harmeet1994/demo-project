@extends('layouts.admin')

@section('title', 'Course Registration Details')
@section('header', 'Course Registration Details')

@section('content')
  <div class="container mx-auto px-6 py-8">
    <div class="bg-white p-6 rounded-md shadow-md">
      <h1 class="text-2xl font-semibold mb-6">Registration #{{ $registration->id }}</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p class="text-gray-600 text-sm">First Name:</p>
          <p class="text-lg font-medium">{{ $registration->first_name }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Last Name:</p>
          <p class="text-lg font-medium">{{ $registration->last_name }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Email:</p>
          <p class="text-lg font-medium">{{ $registration->email }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Mobile:</p>
          <p class="text-lg font-medium">{{ $registration->mobile }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Address:</p>
          <p class="text-lg font-medium">{{ $registration->address }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">City:</p>
          <p class="text-lg font-medium">{{ $registration->city }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">State:</p>
          <p class="text-lg font-medium">{{ $registration->state }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Zip Code:</p>
          <p class="text-lg font-medium">{{ $registration->zip_code }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Course Type:</p>
          <p class="text-lg font-medium">
            <span class="px-2 py-1 text-xs rounded-full {{ $registration->course_type == 'tech' ? 'bg-purple-100 text-purple-800' : ($registration->course_type == 'non-tech' ? 'bg-pink-100 text-pink-800' : 'bg-indigo-100 text-indigo-800') }}">
              {{ ucfirst($registration->course_type) }}
            </span>
          </p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Transaction ID:</p>
          <p class="text-lg font-medium">{{ $registration->transaction_id ?? 'N/A' }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Payment Status:</p>
          <p class="text-lg font-medium">
            <span class="px-2 py-1 text-xs rounded-full 
              {{ $registration->payment_status == 'paid' ? 'bg-green-100 text-green-800' :
              ($registration->payment_status == 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800') }}">
              {{ $registration->payment_status ? ucfirst($registration->payment_status) : 'Pending' }}
            </span>
          </p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Registration Date:</p>
          <p class="text-lg font-medium">{{ $registration->created_at->format('M d, Y H:i A') }}</p>
        </div>
      </div>

      @if($registration->payment_info)
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Payment Information</h2>
          <pre class="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">{{ json_encode(json_decode($registration->payment_info), JSON_PRETTY_PRINT) }}</pre>
        </div>
      @endif

      <div class="flex justify-end">
        <a href="{{ route('admin.course-registrations.index') }}" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          Back to List
        </a>
      </div>
    </div>
  </div>
@endsection
