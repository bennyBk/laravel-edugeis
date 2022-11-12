<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    //On ne charge pas le user par defaut, dans le cas où : user->tickets
    // renverrait user->tickets->user, etc.
    //protected $with=['show','user','ticketType'];
    protected $fillable=['show_id', 'user_id', 'ticket_type_id'];
    protected $with=['show','ticketType'];
    use HasFactory;
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function show() {
        return $this->belongsTo(Show::class);
    }
    public function ticketType() {
        return $this->belongsTo(TicketType::class);
    }
}
