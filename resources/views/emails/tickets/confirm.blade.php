{{-- Attention de ne pas indenter, sinon KC :https://stackoverflow.com/questions/49155257/laravel-blade-template-not-rendering-table-properly --}}
@component('mail::message')
Bonjour {{ $user['firstname'] }}
{{ $user['lastname'] }},
# Votre demande de places a bien été enregistrée

{{--{{ $tickets['show'] }}--}}
{{--@component('mail::button', ['url' => ''])--}}
{{--Button Text--}}
@component('mail::table')
| Spectacle       | place         |
|:------------- |:------------|
@foreach ($user->tickets as $ticket)
| {{$ticket->show->title}}<br>{{$ticket->show->date}} <br> {{$ticket->show->place}} | {{$ticket->ticketType->type}} |
@endforeach

@endcomponent

Merci,<br>
L'équipe pédagogique
{{-- {{ config('app.name') }} --}}
@endcomponent
