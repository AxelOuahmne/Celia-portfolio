<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CategorieProjetController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\PhotoProjetController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserRoleController;
use App\Models\Photo;
use App\Models\PhotoProjet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', [CategorieController::class,'index']);
    Route::get('/categories/{id}', [CategorieController::class,'show']);
    Route::post('/categories/{id}', [CategorieController::class,'store']);
    Route::put('/categories', [CategorieController::class,'update']);
    Route::delete('/categories{id}', [CategorieController::class,'destroy']);


Route::get('/projets', [ProjetController::class,'index']);
    Route::get('/projets/{id}', [ProjetController::class,'show']);
    Route::post('/projets/{id}', [ProjetController::class,'store']);
    Route::put('/projets', [ProjetController::class,'update']);
    Route::delete('/projets{id}', [ProjetController::class,'destroy']);


Route::get('/categorie_projets', [CategorieProjetController::class, 'index']);
    Route::post('/categorie_projets/{id}', [CategorieProjetController::class, 'store']);
    Route::get('/categorie_projets/{id}', [CategorieProjetController::class, 'show']);
    Route::put('/categorie_projets/{id}', [CategorieProjetController::class, 'update']);
    Route::delete('/categorie_projets/{id}', [CategorieProjetController::class, 'destroy']);




 Route::get('/photo', [PhotoController::class, 'index']);
    Route::post('/photo/{id}', [PhotoController::class, 'store']);
    Route::get('/photo/{id}', [PhotoController::class, 'show']);
    Route::put('/photo/{id}', [PhotoController::class, 'update']);
    Route::delete('/photo/{id}', [PhotoController::class, 'destroy']);

Route::get('/photo_projets', [PhotoProjetController::class, 'index']);
    Route::post('/photo_projets/{id}', [PhotoProjetController::class, 'store']);
    Route::get('/photo_projets/{id}', [PhotoProjetController::class, 'show']);
    Route::put('/photo_projets/{id}', [PhotoProjetController::class, 'update']);
    Route::delete('/photo_projets/{id}', [PhotoProjetController::class, 'destroy']);


    Route::get('/roles', [RoleController::class, 'index']);
    Route::post('/roles/{id}', [RoleController::class, 'store']);
    Route::get('/roles/{id}', [RoleController::class, 'show']);
    Route::put('/roles/{id}', [RoleController::class, 'update']);
    Route::delete('/roles/{id}', [RoleController::class, 'destroy']);

Route::get('/user_roles', [UserRoleController::class, 'index']);
    Route::post('/user_roles/{id}', [UserRoleController::class, 'store']);
    Route::get('/user_roles/{id}', [UserRoleController::class, 'show']);
    Route::put('/user_roles/{id}', [UserRoleController::class, 'update']);
    Route::delete('/user_roles/{id}', [UserRoleController::class, 'destroy']);
