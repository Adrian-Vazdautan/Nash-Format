<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table){
            $table->id();
            $table->string('nickname');
            $table->string('avatar')->nullable();
            $table->string('background')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('token')->nullable();
            $table->string('type')->default('user');
            $table->string('choosed_language', 5)->default('ru');
            $table->timestamp('joined_date')->useCurrent();
            $table->json('notifications_settings')->nullable();
            $table->boolean('2FA')->default(false);
            $table->string('nationality')->nullable();
            $table->string('city')->nullable();
            $table->string('studies')->nullable();
            $table->string('gen')->nullable();
            $table->string('Appearance')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
