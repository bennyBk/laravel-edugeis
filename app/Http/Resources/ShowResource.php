<?php

namespace App\Http\Resources;

use App\Models\TicketType;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            "date" => $this->date,
            "title" => $this->title,
            "description" => $this->description,
            "place" => $this->place,
            "capacity" => $this->capacity,
            "availableSeats" => $this->available_seats,
            "ticketTypes" => TicketTypeResource::collection($this->whenLoaded("ticketTypes"))
        ];
    }
}
