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
        Schema::create('categorie_projets', function (Blueprint $table) {

            $table->unsignedBigInteger('projet_id');
            $table->unsignedBigInteger('categorie_id');
            $table->timestamps();
            $table->primary(['projet_id', 'categorie_id']);

            $table->foreign('projet_id')->references('id')->on('projets')->onDelete('cascade');
            $table->foreign('categorie_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categorie_projets');
    }
};
