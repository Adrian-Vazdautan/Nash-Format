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
        Schema::create('hided', function (Blueprint $table){
            $table->id();
            $table->foreignId('article_id')->constrained('articles')->onDelete('cascade');#id_of_article_which_is_hided
            $table->string('nickname')->index();
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
