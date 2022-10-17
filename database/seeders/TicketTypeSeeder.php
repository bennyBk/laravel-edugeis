<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TicketTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ticket_types')->insert([
            'type' => 'Adulte'
        ]);
        DB::table('ticket_types')->insert([
            'type' => 'Enfant'
        ]);
        DB::table('ticket_types')->insert([
            'type' => 'Carte Atout Voir'
        ]);
    }
}
