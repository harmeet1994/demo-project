<?php

use App\Http\Controllers\GoogleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Home', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
})->name('home');

Route::get('/about-us', function () {
  return Inertia::render('About');
});
Route::get('/jobs', function () {
  return Inertia::render('Jobs');
});
Route::get('/courses', function () {
  return Inertia::render('NavigationHome');
});
Route::get('/job-details/{id}', function ($id) {
  return Inertia::render('JobDetails', ['id' => $id]);
});
Route::get('/contact-us', function () {
  return Inertia::render('ContactUs');
});
Route::get('/corporate', function () {
  return Inertia::render('Corporate');
});
Route::get('/ai-course', function () {
  return Inertia::render('Ai');
})->name('ai-inter');
Route::get('/ai-basic', function () {
  return Inertia::render('AiCourseLandingPageBasic');
})->name('ai-basic');
Route::get('/language', function () {
  return Inertia::render('LanguageCourse');
})->name('language');
Route::get('/operations', function () {
  return Inertia::render('OperationsCourse');
})->name('operations');
Route::get('/blogs', function () {
  return Inertia::render('Blogs');
})->name('blogs');

Route::get('/blog-detail/{id}', function ($id) {
  return Inertia::render('BlogDetail', ['id' => $id]);
})->name('blog-detail');

Route::get('/', function () {
  return Inertia::render('Home');
})->name('dashboard');

Route::get('/career-campus', function () {
  return Inertia::render('CareerToCampus');
})->name('careertocampus');

Route::get('/course-inquiry', function () {
  return Inertia::render('CourseInquiry');
})->name('course-inquiry');

Route::get('/privacy-policy', function () {
  return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::get('/terms-and-conditions', function () {
  return Inertia::render('TermsAndConditions');
})->name('terms-and-conditions');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/auth/google', [GoogleController::class, 'redirect'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleController::class, 'callback']);

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
  Route::get('/', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
  Route::resource('jobs', App\Http\Controllers\Admin\JobController::class);
  Route::resource('blogs', App\Http\Controllers\Admin\BlogController::class);
});

require __DIR__ . '/auth.php';
