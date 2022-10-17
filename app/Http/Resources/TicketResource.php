<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //$user = $this->loadMissing('user');
        // marche pas, charge tou le user …
        // dd($this->type); // null : pas de propriété de ce nom …
        // dd($this->type()); // Illuminate\Database\Eloquent\Relations\BelongsTo : la méthode renvoit une relation
        return [
            'show' => $this->show,
            // renvoit le user si la query sur user est déjà faite.
            //'user' => $this->whenLoaded('user',$this->user->id),
            //'user' => $this->loadMissing('user'),
            'type' => $this->ticketType->type,
            // ajoute le user si la requete sur user est déjà faite
            'user' => $this->whenloaded('user'),
            //'user' => UserResource::make($this->user),
        ];


    }
}
