<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// Route::apiResource('categories', CategorieController::class);
// Route::apiResource('projets', ProjetController::class);
// Route::apiResource('roles', RoleController::class);
// Route::apiResource('photos', PhotoController::class);


require __DIR__.'/auth.php';
