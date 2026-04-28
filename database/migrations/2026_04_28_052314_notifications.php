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
        Schema::create('notifications', function (Blueprint $table){
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');#nickname || nickname_id
            $table->string('from_nickname')->nullable();#who call notify. who liked!
            $table->string('type');
            $table->foreignId('article_id')->nullable()->constrained('articles')->onDelete('cascade');
            $table->boolean('status')->default(false);
            $table->string('author_of_article')->nullable();
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
