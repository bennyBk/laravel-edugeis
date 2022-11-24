<?php

namespace App\Mail;

use App\Models\User;
use Auth;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TIcketsConfirm extends Mailable
{
    use Queueable, SerializesModels;
    private $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->user = Auth::user()->load('tickets.show');
        $this->user = Auth::user();
        //dump($this->user);
        //dd();
        //$tickets = $this->user->tickets()
            //->with('show','ticketType')->get();
        ;
        //$this->user->tickets()->map(function($ticket){
        //    dump($ticket->show);
        //    //$ticket->show = $ticket->show;
        //     $ticket->type = $ticket->ticketType->type;
        //     //return $ticket;
        //});

        //dump($tickets);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.tickets.confirm', [
            'user' => $this->user,
            //'tickets' => $this->user->tickets()->get()
        ])->subject('Parcours du spectateur : Votre réservation de places');
    }
}
