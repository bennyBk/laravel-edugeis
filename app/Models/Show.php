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

    /**
     * @param $seats
     * @return bool
     */
    public function takeSeats(int $seats=1): bool
    {
        if($this->available_seats >= $seats) {
            $this->available_seats --;
            $this->save();
            return true;
        }
        return false;
    }
    public function freeSeats(int $seats=1)
    {
            //dd($this->available_seats ++ );
            $this->available_seats ++;
            $this->save();

    }


}
