@extends('layouts.admin')

@section('title', 'Users')

@section('header', 'Users Management')

@section('content')
  <div class="bg-white shadow rounded-lg p-6">
    <div class="flex justify-between items-center mb-6">
    <h3 class="text-lg font-semibold">Registered Users</h3>
    <a href="{{ route('admin.users.export') }}" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
      <i class="fas fa-file-excel mr-2"></i> Export to Excel
    </a>
    </div>

    <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
      <tr>
        <th
        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
        ID</th>
        <th
        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
        Name</th>
        <th
        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
        Email</th>
        <th
        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
        Mobile</th>
        <th
        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
        Registered On</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      @forelse ($users as $user)
      <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ $user->id }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $user->name }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $user->email }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $user->mobile ?? 'N/A' }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $user->created_at->format('M d, Y') }}</td>
      </tr>
    @empty
      <tr>
      <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">No users found</td>
      </tr>
    @endforelse
      </tbody>
    </table>
    </div>

    <div class="mt-4">
    {{ $users->links() }}
    </div>
  </div>
@endsection

@push('styles')
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
@endpush
