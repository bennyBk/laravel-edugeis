<?php

use App\Http\Controllers\ShowController;
use App\Http\Controllers\TicketController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('shows', ShowController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('tickets', TicketController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('user.tickets', TicketController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

// juste la route pour tester le mail
Route::get('/confirm',
    function () {
        //$invoice = App\Models\Invoice::find(1);
        //return new App\Mail\TIcketsConfirm($invoice);
        Mail::to(Auth::user()->email)
            ->send(new App\Mail\TIcketsConfirm());
        return redirect()->back()->with('success', 'Un email de confirmation vous a été envoyé');
        //return Inertia::render('Dashboard');

    })->middleware(['auth', 'verified'])->name('tickets.confirm');
Route::get('mon_compte', [UserController::class, 'edit'])->name('user.edit')->middleware('auth', 'verified');
Route::put('mon_compte', [UserController::class, 'update'])->name('user.update')->middleware('auth', 'verified');
//Route::group();
Route::get('/admin', function () {
    //$users = User::with('tickets.ticketType')->get();
    $users = User::all();
    $users = $users->filter(fn($user)=>$user->tickets->count())->each(function ($user) {
            $user->owes = 0;
                $user->tickets->map(function($ticket) use ($user) {
                preg_match('/\d+/', $ticket->ticketType->type,$matches);
                if($matches) $user->owes +=$matches[0];
            });
            $user->shows = $user->tickets->groupBy('show_id');
            return $user;
    });
    //$users = $users->sortBy([
    //    ['class', 'desc'],
    //    ['lastname', 'asc']
    //])->all();
    //dd($users);
    return view('admin-dashboard')->with(['users' => $users]);
})->middleware(['auth', 'verified']);


require __DIR__ . '/auth.php';
