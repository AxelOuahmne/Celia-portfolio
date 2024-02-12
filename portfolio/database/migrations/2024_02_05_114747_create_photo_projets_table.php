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
        Schema::create('photo_projets', function (Blueprint $table) {
            $table->unsignedBigInteger('projet_id');
            $table->unsignedBigInteger('photo_id');
            $table->timestamps();

            $table->primary(['projet_id', 'photo_id']);
            $table->foreign('projet_id')->references('id')->on('projets')->onDelete('cascade');
            $table->foreign('photo_id')->references('id')->on('photos');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photo_projets');
    }
};
