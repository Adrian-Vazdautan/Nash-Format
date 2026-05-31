<?php
namespace App\Http\Controllers\nav\sign_in\authorization;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User; // ОБЯЗАТЕЛЬНО добавь этот импорт!

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'login' => 'required|string',
            'password' => 'required|string',
        ]);

        $field = filter_var($credentials['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'nickname';

        if (Auth::attempt([$field => $credentials['login'], 'password' => $credentials['password']])) {
            $user = Auth::user();
            
            // Генерируем токен
            $token = $user->createToken('auth_token')->plainTextToken;
            
            return response()->json([
                'message' => 'Авторизация удалась!',
                'access_token' => $token, // Этот ключ фронтенд сохранит в localStorage
                'token_type' => 'Bearer',
            ], 200);
        }

        return response()->json(['message' => 'Неверный логин или пароль'], 401);
    }
}
