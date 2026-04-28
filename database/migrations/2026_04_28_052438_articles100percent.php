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
        Schema::create('articles100percent', function (Blueprint $table){
            $table->id();
            $table->string('code')->unique();
            $table->string('nickname')->index();
            $table->string('category')->index();
            $table->string('title');
            $table->longText('textarea');
            $table->integer('reading_time')->nullable();
            $table->text('thumbnail_description')->nullable();
            $table->string('thumbnail_image')->nullable();
            $table->boolean('allow_notifications')->default(true);
            $table->string('status')->default('active');
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
