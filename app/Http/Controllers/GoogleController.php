<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();

        // Find or create user
        $user = User::updateOrCreate([
            'google_id' => $googleUser->id,
        ], [
            'name' => $googleUser->name,
            'email' => $googleUser->email,
            'image' => $googleUser->avatar,
            'google_token' => $googleUser->token,
            'google_id' => $googleUser->id,
            'google_refresh_token' => $googleUser->refreshToken,
            'password' => bcrypt(str()->random(16)), // random password
        ]);

        Auth::login($user);

        return redirect('/');
    }
}
