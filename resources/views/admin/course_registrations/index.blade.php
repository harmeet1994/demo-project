@extends('layouts.admin')

@section('title', 'Course Registrations')
@section('header', 'Course Registrations')

@section('content')
  <div class="container mx-auto px-6 py-8">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Course Registrations</h1>
    </div>

    <div class="mt-8 bg-white rounded-md shadow-md overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="bg-gray-100 text-gray-700 text-left text-sm leading-normal">
            
            <th class="py-3 px-6 whitespace-nowrap">First Name</th>
            <th class="py-3 px-6 whitespace-nowrap">Last Name</th>
            <th class="py-3 px-6 whitespace-nowrap">Email</th>
            <th class="py-3 px-6 whitespace-nowrap">Mobile</th>
            <th class="py-3 px-6 whitespace-nowrap">Address</th>
            <th class="py-3 px-6 whitespace-nowrap">City</th>
            <th class="py-3 px-6 whitespace-nowrap">State</th>
            <th class="py-3 px-6 whitespace-nowrap">Zip Code</th>
            <th class="py-3 px-6 whitespace-nowrap">Course Type</th>
            <th class="py-3 px-6 whitespace-nowrap">Transaction ID</th>
            <th class="py-3 px-6 whitespace-nowrap">Payment Status</th>
            <th class="py-3 px-6 whitespace-nowrap">Date</th>
            <!-- <th class="py-3 px-6">Actions</th> -->
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm">
          @forelse ($registrations as $registration)
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->first_name }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->last_name }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->email }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->mobile }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->address }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->city }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->state }}</td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->zip_code }}</td>
              <td class="py-3 px-6 whitespace-nowrap">
                <span class="px-2 py-1 text-xs rounded-full {{ $registration->course_type == 'tech' ? 'bg-purple-100 text-purple-800' : ($registration->course_type == 'non-tech' ? 'bg-pink-100 text-pink-800' : 'bg-indigo-100 text-indigo-800') }}">
                  {{ ucfirst($registration->course_type) }}
                </span>
              </td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->transaction_id }}</td>
              <td class="py-3 px-6 whitespace-nowrap">
                <span class="px-2 py-1 text-xs rounded-full 
                  {{ $registration->payment_status == 'paid' ? 'bg-green-100 text-green-800' :
                  ($registration->payment_status == 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800') }}">
                  {{ $registration->payment_status ? ucfirst($registration->payment_status) : 'Pending' }}
                </span>
              </td>
              <td class="py-3 px-6 whitespace-nowrap">{{ $registration->created_at->format('M d, Y') }}</td>
              <!-- <td class="py-3 px-6">
                <a href="{{ route('admin.course-registrations.show', $registration->id) }}" class="text-blue-500 hover:text-blue-700">View</a>
              </td> -->
            </tr>
          @empty
            <tr>
              <td colspan="14" class="py-6 px-6 text-center text-gray-500">No course registrations found</td>
            </tr>
          @endforelse
        </tbody>
      </table>
    </div>

    <div class="mt-4">
      {{ $registrations->links() }}
    </div>
  </div>
@endsection
