<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResources([
    'grades' => '\App\Http\Controllers\GradeController',
    'shows' => '\App\Http\Controllers\ShowController',
    'tickets' => '\App\Http\Controllers\TicketController',
    'ticket_types' => '\App\Http\Controllers\TicketTypeController',
    'users' => '\App\Http\Controllers\UserController',
]);
Route::get("shows/{id}/ticket_types","App\\Http\\Controllers\\ShowController@getTicketTypes");
