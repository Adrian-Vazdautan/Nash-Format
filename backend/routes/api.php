<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\nav\sign_in\registration\signup;

Route::post('/signup', [signup::class, 'signup']);