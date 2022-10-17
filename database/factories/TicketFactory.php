<?php

namespace Database\Factories;

use App\Models\Show;
use App\Models\TicketType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::all()->random()->getKey(),
            'show_id' => Show::all()->random()->getKey(),
            'ticket_type_id' => TicketType::all()->random()->getKey()
        ];
    }
}
