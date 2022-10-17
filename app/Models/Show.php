<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Show extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'title',
        'description',
        'capacity',
        'available_seats'
    ];
    public function tickets() {
        return $this->hasMany(Ticket::class);
    }
    public function ticketTypes() {
        return $this->belongsToMany(TicketType::class);
    }
}
