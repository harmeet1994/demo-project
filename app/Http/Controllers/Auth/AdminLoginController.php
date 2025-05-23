<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AdminLoginController extends Controller
{
  /**
   * Display the admin login view.
   */
  public function create(): Response
  {
    return Inertia::render('Auth/AdminLogin', [
      'canResetPassword' => Route::has('password.request'),
      'status' => session('status'),
    ]);
  }

  /**
   * Handle an incoming authentication request.
   */
  public function store(LoginRequest $request)
  {
    $request->authenticate();

    $request->session()->regenerate();

    // Check if user is an admin, if not logout and redirect back with error
    if (!auth()->user()->is_admin) {
      Auth::guard('web')->logout();
      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return redirect()->route('admin.login')->with('error', 'Unauthorized access. Admin privileges required.');
    }

    return "ok";
  }

  /**
   * Destroy an authenticated session.
   */
  public function destroy(Request $request): RedirectResponse
  {
    Auth::guard('web')->logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return redirect('/admin/login');
  }
}
