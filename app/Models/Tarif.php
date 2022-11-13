<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarif extends Model
{
    use HasFactory;
    protected $fillable = [
        'description',
        'montant',
        'ticket_type_id'
    ];

    public function ticket_type()
    {
        return $this->belongsTo(TicketType::class);
    }
}
