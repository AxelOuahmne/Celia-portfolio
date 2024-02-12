<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoProjet extends Model
{
    use HasFactory;

    protected $table = 'photo_projets'; // Spécifiez le nom de la table si elle diffère du nom conventionnel

    // Relation Many-to-Many avec le modèle Projet
    public function projet()
    {
        return $this->belongsTo(Projet::class, 'projet_id');
    }

    // Relation Many-to-Many avec le modèle Photo
    public function photo()
    {
        return $this->belongsTo(Photo::class, 'photo_id');
    }
}

