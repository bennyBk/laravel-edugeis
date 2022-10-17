<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketTypeResource extends JsonResource
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
            'id' => $this->id,
            'type' => $this->type,
        ];
    }
}
