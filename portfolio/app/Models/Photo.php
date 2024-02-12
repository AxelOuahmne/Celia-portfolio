<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;


    /**
     * The projects that belong to the photo.
     */
    public function projets()
    {
        return $this->belongsToMany(Projet::class, 'photo_projets', 'photo_id', 'projet_id');
    }
}
