@extends('layouts.admin')

@section('title', 'Create Job')
@section('header', 'Create New Job')

@section('content')
<div class="bg-white rounded-lg shadow-sm">
    <form action="{{ route('admin.jobs.store') }}" method="POST" class="p-6">
        @csrf
        
        <div class="space-y-6">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Job Title</label>
                <input type="text" name="title" id="title" value="{{ old('title') }}" 
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required>
                @error('title')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label for="company_name" class="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" name="company_name" id="company_name" value="{{ old('company_name') }}"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required>
                @error('company_name')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" name="location" id="location" value="{{ old('location') }}"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required>
                @error('location')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                <select name="category" id="category"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required>
                    <option value="">Select Category</option>
                    <option value="Full Time" {{ old('category') == 'Full Time' ? 'selected' : '' }}>Full Time</option>
                    <option value="Part Time" {{ old('category') == 'Part Time' ? 'selected' : '' }}>Part Time</option>
                    <option value="Contract" {{ old('category') == 'Contract' ? 'selected' : '' }}>Contract</option>
                    <option value="Internship" {{ old('category') == 'Internship' ? 'selected' : '' }}>Internship</option>
                </select>
                @error('category')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Job Description</label>
                <textarea name="description" id="description" rows="5"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required>{{ old('description') }}</textarea>
                @error('description')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label for="requirements" class="block text-sm font-medium text-gray-700">Requirements</label>
                <textarea name="requirements" id="requirements" rows="5"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required>{{ old('requirements') }}</textarea>
                @error('requirements')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                <select name="status" id="status"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required>
                    <option value="Draft" {{ old('status') == 'Draft' ? 'selected' : '' }}>Draft</option>
                    <option value="Published" {{ old('status') == 'Published' ? 'selected' : '' }}>Published</option>
                </select>
                @error('status')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <div class="flex justify-end space-x-3">
                <a href="{{ route('admin.jobs.index') }}" 
                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Cancel
                </a>
                <button type="submit" 
                    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Create Job
                </button>
            </div>
        </div>
    </form>
</div>
@endsection

@push('scripts')
<script src="https://cdn.tiny.cloud/1/YOUR_API_KEY/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
<script>
    tinymce.init({
        selector: '#description, #requirements',
        height: 300,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
    });
</script>
@endpush 