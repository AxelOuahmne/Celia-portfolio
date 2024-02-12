<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Categorie extends Model
{
    use HasFactory;

    /**
     * The projects that belong to the category.
     */
    public function projets()
    {
        return $this->belongsToMany(Projet::class, 'categorie_projets', 'categorie_id', 'projet_id');
    }
}
