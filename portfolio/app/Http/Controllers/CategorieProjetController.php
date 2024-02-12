<?php

namespace App\Http\Controllers;

use App\Models\CategorieProjet;
use Illuminate\Http\Request;

class CategorieProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorieProjets = CategorieProjet::all();
        return response()->json($categorieProjets);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'projet_id' => 'required|exists:projets,id',
            'categorie_id' => 'required|exists:categories,id',
        ]);

        // Create a new CategorieProjet instance
        $categorieProjet = new CategorieProjet();
        $categorieProjet->projet_id = $request->projet_id;
        $categorieProjet->categorie_id = $request->categorie_id;
        $categorieProjet->save();

        return response()->json([
            "message" => "CategorieProjet added"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(CategorieProjet $categorieProjet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CategorieProjet $categorieProjet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CategorieProjet $categorieProjet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategorieProjet $categorieProjet)
    {
        //
    }
}
