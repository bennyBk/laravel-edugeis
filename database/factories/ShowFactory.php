<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Show>
 */
class ShowFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'date' => fake()->dateTime,
            'title' => $this->faker->title,
            'place' => fake()->text(50),
            'description' => fake()->text(50),
            'capacity' => 20,
            'available_seats' => 20
        ];
    }

}
