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
        Schema::create('articles', function (Blueprint $table){
            $table->id();
            $table->string('nickname');
            $table->string('status')->default('draft');
            $table->string('title');
            $table->text('textarea');
            $table->string('thumbnail_image')->nullable();
            $table->timestamp('dateofpublication')->nullable();
            $table->string('category')->index();
            $table->unsignedBigInteger('views')->default(0);
            $table->string('code')->nullable();
            $table->longText('textarea100percent')->nullable();
            $table->text('thumbnail_description')->nullable();
            $table->integer('reading_time')->nullable();
            $table->boolean('allow_notifications')->default(true);
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
