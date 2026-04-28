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
        Schema::create('articles_commentary', function (Blueprint $table){
            $table->id();
            $table->foreignId('article_id')->constrained('articles')->onDelete('cascade');
            $table->text('commentaryText');
            $table->string('type_of_comment')->default('text');
            $table->timestamp('dateofpublication')->useCurrent();
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
