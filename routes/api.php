<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\OrganizationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\CourseInquiry;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\CourseRegistrationController;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::get('/get-blogs', [BlogController::class, 'getBlogs']);
Route::get('/get-blogs-list', [BlogController::class, 'getBlogsFull']);
Route::get('/get-blog', [BlogController::class, 'getBlogById']);

Route::get('/get-job-postings', [JobController::class, 'index']);

Route::group(['middleware' => 'auth:sanctum'], function () {
  Route::post('/bookmark-job', [JobController::class, 'saveJob']);
  Route::post('/save-job', [JobController::class, 'saveJobForm']);
  Route::post('/jobs', [JobController::class, 'store']);

  Route::get('/get-job-details', [JobController::class, 'jobDetails']);
});

Route::post('/organizations', [OrganizationController::class, 'store']);

// Course Inquiry Route
Route::post('/course-inquiry', function (Request $request) {
  $validated = $request->validate([
    'name' => 'required|string|max:255',
    'email' => 'required|email|max:255',
    'phone' => 'required|string|max:20',
    'course_type' => 'required|string|in:tech,non-tech,corporate',
  ]);

  $inquiry = CourseInquiry::create($validated);

  return response()->json([
    'success' => true,
    'message' => 'Inquiry submitted successfully',
    'data' => $inquiry
  ], 201);
});

// Payment Routes
Route::post('/initiate-payment', [PaymentController::class, 'initiatePayment']);

// Course Registration Routes
Route::post('/course-registration', [CourseRegistrationController::class, 'store']);

// Authentication Routes
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']);
Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', function (Request $request) {
    return $request->user();
  });
  Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout']);
});
