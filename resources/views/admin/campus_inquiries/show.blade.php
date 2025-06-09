@extends('layouts.admin')

@section('title', 'Campus Inquiry Details')
@section('header', 'Campus Inquiry Details')

@section('content')
  <div class="container mx-auto px-6 py-8">
    <div class="bg-white p-6 rounded-md shadow-md">
      <h1 class="text-2xl font-semibold mb-6">Inquiry #{{ $inquiry->id }}</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p class="text-gray-600 text-sm">Email:</p>
          <p class="text-lg font-medium">{{ $inquiry->email }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Phone:</p>
          <p class="text-lg font-medium">{{ $inquiry->phone }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">College:</p>
          <p class="text-lg font-medium">{{ $inquiry->college }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Degree:</p>
          <p class="text-lg font-medium">{{ $inquiry->degree }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Training Session:</p>
          <p class="text-lg font-medium">{{ $inquiry->training_session }}</p>
        </div>
        <div>
          <p class="text-gray-600 text-sm">Inquiry Date:</p>
          <p class="text-lg font-medium">{{ $inquiry->created_at->format('M d, Y H:i A') }}</p>
        </div>
      </div>

      <div class="flex justify-end">
        <a href="{{ route('admin.campus-inquiries.index') }}" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          Back to List
        </a>
      </div>
    </div>
  </div>
@endsection
