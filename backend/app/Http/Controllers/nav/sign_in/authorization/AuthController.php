<?php

namespace App\Http\Controllers\nav\sign_in\authorization;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'login' => 'required|string', // это будет email или nickname
            'password' => 'required|string',
        ]);

        // Проверяем, является ли логин email-ом
        $field = filter_var($credentials['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'nickname';

        if (Auth::attempt([$field => $credentials['login'], 'password' => $credentials['password']])) {
            return response()->json(['message' => 'Авторизация удалась!'], 200);
        }

        return response()->json(['message' => 'Неверный логин или пароль'], 401);
    }
}
