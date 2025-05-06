<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
  /**
   * Handle an incoming request.
   */
  public function handle(Request $request, Closure $next): Response
  {
    if (!auth()->check()) {
      return redirect()->route('admin.login');
    }

    if (!auth()->user()->is_admin) {
      // Auth::logout();
      return redirect()->route('admin.login')->with('error', 'These credentials do not match our records.');
    }

    return $next($request);
  }
}
