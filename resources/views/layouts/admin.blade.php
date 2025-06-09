<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard - @yield('title')</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('assets/admin/css/style.css') }}">
  @stack('styles')
</head>

<body class="bg-gray-100">
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-800 text-white">
      <div class="p-4">
        <h1 class="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav class="mt-4">
        <a href="{{ route('admin.dashboard') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.dashboard') ? 'bg-gray-700' : '' }}">
          Dashboard
        </a>
        <a href="{{ route('admin.jobs.index') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.jobs.*') ? 'bg-gray-700' : '' }}">
          Jobs
        </a>
        <a href="{{ route('admin.applications.index') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.applications.*') ? 'bg-gray-700' : '' }}">
          Applications
        </a>
        <a href="{{ route('admin.blogs.index') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.blogs.*') ? 'bg-gray-700' : '' }}">
          Blogs
        </a>
        <a href="{{ route('admin.course-inquiries.index') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.course-inquiries.*') ? 'bg-gray-700' : '' }}">
          Course Inquiries
        </a>
        <a href="{{ route('admin.course-registrations.index') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.course-registrations.*') ? 'bg-gray-700' : '' }}">
          Course Registrations
        </a>
        <a href="{{ route('admin.campus-inquiries.index') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.campus-inquiries.*') ? 'bg-gray-700' : '' }}">
          Campus Inquiries
        </a>
        <a href="{{ route('admin.users.index') }}"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 {{ request()->routeIs('admin.users.*') ? 'bg-gray-700' : '' }}">
          Users
        </a>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-x-hidden overflow-y-auto">
      <!-- Top Navigation -->
      <header class="bg-white shadow">
        <div class="px-4 py-6">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-semibold text-gray-800">@yield('header')</h2>
            <div class="flex items-center">
              <span class="text-gray-600 mr-4">{{ Auth::user()->name }}</span>
              <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit" class="text-gray-600 hover:text-gray-800">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        @yield('content')
      </main>
    </div>
  </div>

  <script src="{{ asset('assets/admin/js/script.js') }}"></script>
  @stack('scripts')
</body>

</html>
