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
        Schema::create('like_for_commentary_from_article', function (Blueprint $table) {
            $table->id();
            $table->string('nickname')->index();
            $table->foreignId('commentary_id')->constrained('articles_commentary')->onDelete('cascade');
            $table->boolean('likeOrZeroOrOne')->default(1);
            $table->string('type_of_comment')->nullable();
            $table->unique(['nickname', 'commentary_id'], 'nick_comm_unique');
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
