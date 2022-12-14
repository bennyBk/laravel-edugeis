<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketType extends Model
{
    use HasFactory;
    protected $fillable = [
        'type'
    ];
    public function tickets() {
        return $this->hasMany(Ticket::class);
    }
    public function shows()
    {
        return $this->belongsToMany(Show::class);
    }
    public function tarif() {
        return $this->hasOne(Tarif::class);
    }
}
