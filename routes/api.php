<?php

use App\Http\Controllers\AuthController;
use App\Http\Resources\TicketResourceCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\Ticket;
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
/* utilisateur courant (auth) */
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Inscription
Route::post('/register', [AuthController::class, 'register']);
//
Route::post('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
Route::post('/login', function (){
    echo 'login';
});

Route::apiResources([
    'grades' => '\App\Http\Controllers\GradeController',
    'shows' => '\App\Http\Controllers\ShowController',
    'tickets' => '\App\Http\Controllers\TicketController',
    'ticket_types' => '\App\Http\Controllers\TicketTypeController',
    'users' => '\App\Http\Controllers\UserController',
]);
Route::get("shows/{id}/ticket_types","App\\Http\\Controllers\\ShowController@getTicketTypes");
;
