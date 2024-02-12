<?php

namespace App\Http\Controllers;

use App\Models\PhotoProjet;
use Illuminate\Http\Request;

class PhotoProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $photoProjet = PhotoProjet::all();
        return response()->json($photoProjet);
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
        // $request->validate([
        //     'projet_id' => 'required|exists:projets,id',
        //     'photo_id' => 'required|exists:photos,id',
        // ]);

        // Create a new CategorieProjet instance
        $photoProjet = new PhotoProjet();
        $photoProjet->projet_id = $request->projet_id;
        $photoProjet->photo_id  = $request->photo_id;
        $photoProjet->save();

        return response()->json([
            "message" => "photoProjet added"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(PhotoProjet $photoProjet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PhotoProjet $photoProjet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PhotoProjet $photoProjet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PhotoProjet $photoProjet)
    {
        //
    }
}
