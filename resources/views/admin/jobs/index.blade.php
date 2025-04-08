@extends('layouts.admin')

@section('title', 'Jobs Management')
@section('header', 'Jobs Management')

@section('content')
<div class="bg-white rounded-lg shadow-sm">
    <div class="p-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
            <h3 class="text-lg font-medium">All Jobs</h3>
            <a href="{{ route('admin.jobs.create') }}" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add New Job
            </a>
        </div>
    </div>

    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @foreach($jobs as $job)
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">{{ $job->title }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ $job->company_name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ $job->location }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {{ $job->status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800' }}">
                            {{ $job->status }}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                        <a href="{{ route('admin.jobs.edit', $job->id) }}" class="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
                        <form action="{{ route('admin.jobs.destroy', $job->id) }}" method="POST" class="inline">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure you want to delete this job?')">Delete</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <div class="px-6 py-4">
        {{ $jobs->links() }}
    </div>
</div>
@endsection 