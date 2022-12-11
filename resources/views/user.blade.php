<li class="mt-2">
    <div class=" items-end">
        <span class="text-lg text-indigo-800">
            {{$user->firstname}} {{$user->lastname}}
        </span>
        <span class="text-sm flex-1">{{$user->email}}</span>
        <span class="text-right px-2 float-right mt-1"> Total : {{$user->owes}} €</span>
    </div>
    @foreach($user->shows as $showId => $tickets)
        <div class="flex mt-1">
            @foreach($tickets as $ticket)
                @if($loop->first)
                    <h2 class="flex-1 border-y-2">{{$ticket->show->title}}</h2>
                    <ul class="border-y">
                        @endif
                        {{--            {{$ticket->ticketType}}<br>--}}
                        <li class="text-right px-2 border-y">
                            {{$ticket->ticketType->type}}
                        </li>
                        @if($loop->last)
                    </ul>
                @endif
            @endforeach
        </div>
    @endforeach
</li>
