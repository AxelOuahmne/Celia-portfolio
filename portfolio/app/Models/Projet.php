<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Projet extends Model
{
    use HasFactory;

    /**
     * The categories that belong to the project.
     */
    public function categories()
    {
        return $this->belongsToMany(Categorie::class, 'categorie_projets', 'projet_id', 'categorie_id');
    }

       /**
     * The photos that belong to the project.
     */
    public function photos()
    {
        return $this->belongsToMany(Photo::class, 'photo_projets', 'projet_id', 'photo_id');
    }
}
