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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/auth/google', [GoogleController::class, 'redirect'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleController::class, 'callback']);

require __DIR__.'/auth.php';
