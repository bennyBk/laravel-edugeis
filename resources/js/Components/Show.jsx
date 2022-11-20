import React from 'react';
import TicketType from '@/Components/TicketType';
import {Inertia} from "@inertiajs/inertia";
import {useForm, usePage} from "@inertiajs/inertia-react";
import parseHtml from "html-react-parser";

export default function Show({show}) {
  const {auth} = usePage().props;
  const {user} = auth;

  // console.log(user.tickets);
  const userTickets = user.tickets.filter(ticket => ticket.show.id === show.id);
  //  TODO : ajouter le nombre de tickets de l'utilisateur avec un setState peut-être ?
  //  ou
  /*  const ticketTypes = show.ticket_types.map(ticketType => {
       ...ticketType,
       number: 0
    });*/
  function addTicket(ticketTypeId) {
    // console.log(user.id);
    // console.log(show.id);
    // console.log(ticketTypeId);
    Inertia.post(route('tickets.store'),
      {userId: user.id, showId: show.id, ticketTypeId: ticketTypeId},
      {preserveScroll: true,preserveState: true});
    // Inertia.post(route('tickets.store'), {userId: user.id,showId: show.id,ticketTypeId: ticketTypeId}), {onSuccess: () => alert('dla bombe')});
  }

  function removeTicket(ticketTypeId) {
    // TODO suppr. le 1er ticket du type donné
    // console.log(user.tickets);
    const ticket = userTickets.filter(ticket => ticket.ticket_type.id === ticketTypeId)[0]
    // console.log(ticket);
    if (ticket) {
      Inertia.delete(route('tickets.destroy', ticket),
        {preserveScroll: true});
    }
  }

  return (
    <div className="p-6 flex space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 -scale-x-100" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
      <div className="flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {/*<span className="block">Bienvenue</span>*/}
            <span className="block text-indigo-600">{show.title}</span>
          </h2>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-800">{show.title}</span>
            <small className="ml-2 text-sm text-gray-600">{show.place}</small>
            <small className="ml-2 text-sm text-gray-600">{new Date(show.date).toLocaleString()}</small>
          </div>
        </div>
        <div>
          {show.available_seats
            ? <small className="ml-2 text-sm text-red-600">Encore {show.available_seats} places
              disponibles</small>
            : <small className="ml-2 text-sm text-red-600">Plus de place disponible</small>
          }
        </div>
        <div className="mt-4 text-lg text-gray-900">{parseHtml(show.description)}</div>
        <div>prendre des places :
          <div className="flexxxx ">
            {show.ticket_types.map(ticketType =>

              <TicketType key={ticketType.id}
                          increment={() => addTicket(ticketType.id)}
                          decrement={() => removeTicket(ticketType.id)}
                          number={userTickets.filter(ticket => ticket.ticket_type.id === ticketType.id).length}
                          ticketType={ticketType}>{ticketType.type}</TicketType>)}
          </div>

        </div>
      </div>
    </div>
  );
}
