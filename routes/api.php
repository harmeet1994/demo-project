<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/get-blogs', [BlogController::class, 'getBlogs']);
Route::get('/get-blogs-list', [BlogController::class, 'getBlogsFull']);


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/bookmark-job', [JobController::class, 'saveJob']);
    Route::post('/save-job', [JobController::class, 'saveJobForm']);
    Route::get('/get-job-postings', [JobController::class, 'index']);
    Route::get('/get-job-details', [JobController::class, 'jobDetails']);
    
});
