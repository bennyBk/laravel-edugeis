<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       $this->call([
           GradeSeeder::class,
           UserSeeder::class,
           ShowSeeder::class,
           TicketTypeSeeder::class,
           TicketSeeder::class,
           ShowTicketTypeSeeder::class,
           ]);
    }
}
