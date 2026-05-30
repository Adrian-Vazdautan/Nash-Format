<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\nav\sign_in\registration\signup;
use App\Http\Controllers\nav\sign_in\authorization\AuthController;

Route::post('/login', [AuthController::class, 'login']);

Route::post('/signup', [signup::class, 'signup']);