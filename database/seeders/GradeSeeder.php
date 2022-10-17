<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($grade = 6; $grade >= 3; $grade--) {
            for ($class = 1; $class <= 6; $class++) {

                DB::table('grades')->insert([
                    'name' => sprintf('%de%d', $grade, $class),
                    'grade' => $grade,
                    'class' => $class
                ]);
            }
        }
    }
}
