@extends('layouts.admin')

@section('title', 'Job Applications')
@section('header', 'Job Applications')

@section('content')
  <div class="bg-white rounded-lg shadow-sm">
    <div class="p-4 border-b border-gray-200">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-medium">All Job Applications</h3>
    </div>
    </div>

    @if(session('success'))
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 mx-4 mt-4"
    role="alert">
    <span class="block sm:inline">{{ session('success') }}</span>
    </div>
  @endif

    <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied On</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      @foreach($applications as $application)
      <tr>
      <td class="px-6 py-4 whitespace-nowrap">{{ $application->id }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ $application->job_title }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ $application->company_name }}</td>
      <td class="px-6 py-4 whitespace-nowrap">
      {{ $application->applicant_id ? $application->applicant_id : $application->email }}
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full
        {{ $application->status === 'pending' ? 'bg-yellow-100 text-yellow-800' : '' }}
        {{ $application->status === 'reviewed' ? 'bg-blue-100 text-blue-800' : '' }}
        {{ $application->status === 'shortlisted' ? 'bg-purple-100 text-purple-800' : '' }}
        {{ $application->status === 'rejected' ? 'bg-red-100 text-red-800' : '' }}
        {{ $application->status === 'hired' ? 'bg-green-100 text-green-800' : '' }}">
        {{ ucfirst($application->status ?? 'pending') }}
      </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
      {{ $application->applied_at ? date('M d, Y', strtotime($application->applied_at)) : 'N/A' }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm">
      <a href="{{ route('admin.applications.show', $application->id) }}"
        class="text-blue-600 hover:text-blue-900">View Details</a>
      </td>
      </tr>
    @endforeach

      @if(count($applications) === 0)
      <tr>
      <td colspan="7" class="px-6 py-4 text-center text-gray-500">No applications found</td>
      </tr>
    @endif
      </tbody>
    </table>
    </div>

    <div class="px-6 py-4">
    {{ $applications->links() }}
    </div>
  </div>
@endsection
