<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorieProjet extends Model
{
    use HasFactory;

    protected $table = 'categorie_projets';

    protected $fillable = ['projet_id', 'categorie_id'];

    /**
     * Get the projet that belongs to the CategorieProjet.
     */
    public function projet()
    {
        return $this->belongsTo(Projet::class, 'projet_id');
    }

    /**
     * Get the categorie that belongs to the CategorieProjet.
     */
    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }
}
