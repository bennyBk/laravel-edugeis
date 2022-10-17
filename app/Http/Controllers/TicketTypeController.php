<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketTypeRequest;
use App\Http\Requests\UpdateTicketTypeRequest;
use App\Http\Resources\TicketResource;
use App\Models\TicketType;

class TicketTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTicketTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTicketTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TicketType  $ticketType
     * @return \Illuminate\Http\Response
     */
    public function show(TicketType $ticketType)
    {
        return new TicketTypeResource($ticketType);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TicketType  $ticketType
     * @return \Illuminate\Http\Response
     */
    public function edit(TicketType $ticketType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTicketTypeRequest  $request
     * @param  \App\Models\TicketType  $ticketType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTicketTypeRequest $request, TicketType $ticketType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TicketType  $ticketType
     * @return \Illuminate\Http\Response
     */
    public function destroy(TicketType $ticketType)
    {
        //
    }
}
