@extends('layouts.admin')

@section('title', 'Course Inquiries')

@section('content')
  <div class="container mx-auto px-6 py-8">
    <div class="flex items-center justify-between">
    <h1 class="text-2xl font-semibold">Course Inquiries</h1>
    </div>

    <div class="mt-8 bg-white rounded-md shadow-md overflow-x-auto">
    <table class="min-w-full bg-white">
      <thead>
      <tr class="bg-gray-100 text-gray-700 text-left text-sm leading-normal">
        <!-- <th class="py-3 px-6">ID</th> -->
        <th class="py-3 px-6">Name</th>
        <th class="py-3 px-6">Email</th>
        <th class="py-3 px-6">Phone</th>
        <th class="py-3 px-6">Course Type</th>
        <th class="py-3 px-6">Payment Status</th>
        <th class="py-3 px-6">Date</th>
        <th class="py-3 px-6">Transaction ID</th>

      </tr>
      </thead>
      <tbody class="text-gray-600 text-sm">
      @forelse ($inquiries as $inquiry)
      <tr class="border-b border-gray-200 hover:bg-gray-50">
        <!-- <td class="py-3 px-6">{{ $inquiry->id }}</td> -->
        <td class="py-3 px-6">{{ $inquiry->name }}</td>
        <td class="py-3 px-6">{{ $inquiry->email }}</td>
        <td class="py-3 px-6">{{ $inquiry->phone }}</td>
        <td class="py-3 px-6">
        <span
        class="px-2 py-1 text-xs rounded-full {{ $inquiry->course_type == 'corporate' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800' }}">
        {{ ucfirst($inquiry->course_type) }}
        </span>
        </td>
        <td class="py-3 px-6">
        <span class="px-2 py-1 text-xs rounded-full
      {{ $inquiry->payment_status == 'paid' ? 'bg-green-100 text-green-800' :
      ($inquiry->payment_status == 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800') }}">
        {{ $inquiry->payment_status ? ucfirst($inquiry->payment_status) : 'Pending' }}
        </span>
        </td>
        <td class="py-3 px-6">{{ $inquiry->created_at->format('M d, Y') }}</td>
        <td class="py-3 px-6">{{ $inquiry->transaction_id }}</td>

      </tr>
    @empty
      <tr>
      <td colspan="8" class="py-6 px-6 text-center text-gray-500">No course inquiries found</td>
      </tr>
    @endforelse
      </tbody>
    </table>
    </div>

    <div class="mt-4">
    {{ $inquiries->links() }}
    </div>
  </div>
@endsection
