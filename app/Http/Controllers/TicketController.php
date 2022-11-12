<?php

namespace App\Http\Controllers;

use App\Http\Resources\TicketResource;
use App\Http\Resources\TicketResourceCollection;
use App\Models\Show;
use App\Models\Ticket;
//use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        ////$tickets = Ticket::with(['user','show'])->get();
        ////return new TicketResourceCollection($tickets);
        //$tickets = new TicketResourceCollection( Auth::user()->tickets()
        //    ->with('show')
        //    ->get()
        //    //->groupBy('show')
        //);
        //$tickets = new TicketResourceCollection(Auth::user()->tickets);
        //$tickets = Auth::user()->tickets->groupBy('show.id');
        //// TODO mettre le show en key du group
        //
        //$tickets = $tickets->groupBy('show.id');

        return Inertia::render('Tickets/Index', [
            // exemple : https://github.com/Landish/pingcrm-react/blob/main/app/Http/Controllers/OrganizationsController.php
            /*'organizations' => new OrganizationCollection(
                Auth::user()->account->organizations()
                    ->orderBy('name')
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),*/
            //'tickets' => $tickets

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
//     public function store($userId,$showId,$ticketTypeId)
    public function store(Request $request)
    {
         //dump($request->isJson());
         //dump($request->userId);
         //dump($request->showId);
         //dump($request->ticketTypeId);
        $showId = $request->showId;
         // s'il reste des palces dans le shwo
        $myShow = Show::find($showId);
        if (!$myShow) {
            return response()->json([
                'erreur'=> 'pas de spectacle trouvé'
            ],422);
        }
        if ($myShow->available_seats > 0){
        $myShow->takeSeats(1);



         Ticket::create([
             'show_id' => $showId,
             'user_id'=> $request->userId,
             'ticket_type_id' => $request->ticketTypeId
         ]);
//         decompter un ticket du nombre de tickets disponibles du spectacle
//          dd($request);
         return redirect(route('shows.index'))->with('success', 'Ticket pris!');
        }
         return redirect(route('shows.index'))->with('error', 'impossible de prendre ce ticket!');
    //    return response()->json([
    //    'erreur'=> 'impossible de prendre la place'
    //],422);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function show(Ticket $ticket)
    {
        return new TicketResource($ticket);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $ticket = Ticket::findOrFail($id);

        // TODO limiter à l'utilisateur courant en def. la policy :
        // https://bootcamp.laravel.com/inertia/editing-chirps#authorization
        // $ticket->loadMissing('show');
        $ticket->show->freeSeats();
        $ticket->delete();
        if($ticket)
        return redirect(route('shows.index'))->with('success', 'Ticket supprimé');
    }
}
