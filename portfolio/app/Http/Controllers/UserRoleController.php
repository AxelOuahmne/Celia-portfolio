<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userRoles = UserRole::all();
        return response()->json($userRoles);
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
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'role_id' => 'required|exists:roles,id',
            // You can add other validation rules if needed
        ]);

        // Check if the user role already exists
        $existingUserRole = UserRole::where('user_id', $request->user_id)
            ->where('role_id', $request->role_id)
            ->first();

        if ($existingUserRole) {
            return response()->json([
                "message" => "User role already exists."
            ], 422);
        }

        $userRole = new UserRole();
        $userRole->user_id = $request->user_id;
        $userRole->role_id = $request->role_id;
        $userRole->save();
        return response()->json([
            "message" => "User role added."
        ], 201);


    }
    public function getUserRoles(Request $request, User $user)
    {
        // Basic authorization check
        if (!$request->user()->can('view', $user)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $userRoles = UserRole::where('user_id', $user->id)->get();

        return response()->json($userRoles);
    }


    /**
     * Display the specified resource.
     */
    public function show(UserRole $userRole)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserRole $userRole)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserRole $userRole)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserRole $userRole)
    {
        //
    }
}
