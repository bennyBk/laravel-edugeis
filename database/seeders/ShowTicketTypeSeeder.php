<?php

namespace Database\Seeders;

use App\Models\Show;
use App\Models\TicketType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShowTicketTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Show::all()->each(function ($show) {
            $tt = TicketType::all()->pluck('id');
            $show->ticketTypes()->attach($tt);
            //$sId = $item->id;
            //DB::table('show_ticket_type')->insert([
            //    'show_id' => $ttId,
            //    'ticket_type_id' => $sId
            //]);
        });
    }
}
