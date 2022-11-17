{{-- Attention de ne pas indenter, sinon KC :https://stackoverflow.com/questions/49155257/laravel-blade-template-not-rendering-table-properly --}}
@component('mail::message')
# Votre demande de places a bien été enregistrée
{{ $user['firstname'] }}
{{ $user['lastname'] }}
{{--{{ $tickets['show'] }}--}}
The body of your message.
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
{{-- {{ config('app.name') }} --}}
@endcomponent
