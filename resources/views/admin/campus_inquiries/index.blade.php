@extends('layouts.admin')

@section('title', 'Campus Inquiries')
@section('header', 'Campus Inquiries')

@section('content')
  <div class="container mx-auto px-6 py-8">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Campus Inquiries</h1>
    </div>

    <div class="mt-8 bg-white rounded-md shadow-md overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="bg-gray-100 text-gray-700 text-left text-sm leading-normal">
            <th class="py-3 px-6 whitespace-nowrap">Email</th>
            <th class="py-3 px-6 whitespace-nowrap">Phone</th>
            <th class="py-3 px-6 whitespace-nowrap">College</th>
            <th class="py-3 px-6 whitespace-nowrap">Degree</th>
            <th class="py-3 px-6 whitespace-nowrap">Training Session</th>
            <th class="py-3 px-6 whitespace-nowrap">Date</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm">
          @forelse ($inquiries as $inquiry)
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="py-3 px-6 whitespace-nowrap">{{ $inquiry->email }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $inquiry->phone }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $inquiry->college }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $inquiry->degree }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $inquiry->training_session }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $inquiry->created_at->format('M d, Y') }}</td>
            </tr>
          @empty
            <tr>
              <td colspan="6" class="py-6 px-6 text-center text-gray-500">No campus inquiries found</td>
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
