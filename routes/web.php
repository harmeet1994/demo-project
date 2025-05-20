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

Route::get('/language-webinar-form', function () {
  return Inertia::render('LanguageWebinar');
})->name('language-webinar');

Route::get('/course-inquiry-corporate', function () {
  return Inertia::render('CourseInquiryCorporate');
})->name('course-inquiry-corporate');

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

  // Job Applications routes
  Route::get('applications', [App\Http\Controllers\Admin\JobApplicationController::class, 'index'])->name('applications.index');
  Route::get('applications/{id}', [App\Http\Controllers\Admin\JobApplicationController::class, 'show'])->name('applications.show');
  Route::put('applications/{id}/status', [App\Http\Controllers\Admin\JobApplicationController::class, 'updateStatus'])->name('applications.update-status');

  // Course Inquiry Routes
  Route::get('course-inquiries', [App\Http\Controllers\Admin\CourseInquiryController::class, 'index'])->name('course-inquiries.index');
  Route::get('course-inquiries/{id}', [App\Http\Controllers\Admin\CourseInquiryController::class, 'show'])->name('course-inquiries.show');

  // User Management Routes
  Route::get('users', [App\Http\Controllers\Admin\UserController::class, 'index'])->name('users.index');
  Route::get('users/export', [App\Http\Controllers\Admin\UserController::class, 'export'])->name('users.export');
});

Route::post('jobs', [App\Http\Controllers\JobController::class, 'jobPost'])->name('jobs.post');

Route::any('/payment/success', [App\Http\Controllers\PaymentController::class, 'paymentSuccess'])->name('payment.success');
Route::any('/payment/failure', [App\Http\Controllers\PaymentController::class, 'paymentFailure'])->name('payment.failure');
Route::get('/thankyou', function () {
  return Inertia::render('ThankYou');
})->name('thankyou');
Route::get('/payment/failed', function () {
  return Inertia::render('PaymentFailed');
})->name('payment.failed');

// Course Registration payment callbacks
Route::any('/registration/payment/success', [App\Http\Controllers\CourseRegistrationController::class, 'paymentSuccess'])->name('registration.payment.success');
Route::any('/registration/payment/failure', [App\Http\Controllers\CourseRegistrationController::class, 'paymentFailure'])->name('registration.payment.failure');

require __DIR__ . '/auth.php';

// Admin Authentication Routes
Route::middleware('guest')->prefix('admin')->name('admin.')->group(function () {
  Route::get('/login', [App\Http\Controllers\Auth\AdminLoginController::class, 'create'])->name('login');
  Route::post('/login', [App\Http\Controllers\Auth\AdminLoginController::class, 'store'])->name('login.store');
});

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
  Route::post('/logout', [App\Http\Controllers\Auth\AdminLoginController::class, 'destroy'])->name('logout');
});
