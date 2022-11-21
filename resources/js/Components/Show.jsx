import React from 'react';
import TicketType from '@/Components/TicketType';
import {Inertia} from "@inertiajs/inertia";
import {useForm, usePage} from "@inertiajs/inertia-react";
import parseHtml from "html-react-parser";
import {FormatDate} from "@/Components/Helpers";

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
      {preserveScroll: true, preserveState: true});
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

  // https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
  return (
    <div className="p-6 flex space-x-2">
      {/* TODO ICON SHOW */}
      <div className="flex-1">
        <div class="md:flex border-b-2 items-end">
          <h2 className=" flex-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {/*<span className="block">Bienvenue</span>*/}
            <span className="block text-indigo-600">{show.title}</span>
          </h2>
          {/*<div className='text-right py-1'>
            <div class=""><small className="ml-2 text-sm text-gray-600">{FormatDate(show.date)}</small>

            </div>
          </div>*/}
        </div>


        <div className="flex">
          <div className="flex-1 flex-column flex space-around flex-col mt-4 mr-2 mb-2 text-lgs text-gray-900">
            <div className='text-right py-1'>
              <div className=""><div className="mt-4 text-sm text-gray-800">{FormatDate(show.date)}</div>

              </div>
            </div>
            <div className="mb-2 text-xl text-orange-700">{show.place}</div>


            <div className="my-auto">{parseHtml(show.description)}</div>
          </div>
          <div className='w-1/2 flex-col justify-between content-between'>

            <div className='text-center p-2'>
              {show.available_seats
                ? <small className="ml-2 text-sm text-red-600"><span
                  className=' font-bold'>{show.available_seats}</span> places
                  disponibles</small>
                : <small className="ml-2 text-sm text-red-600">Plus de place disponible</small>
              }
            </div>
            <div className='bg-gray-50 rounded-md border border-gray-100 p-2'>
              <div
                className="text-sm text-center border-b mb-2 border-indigo-200 text-indigo-800 font-bold py-1"> Prendre
                des places
              </div>
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
      </div>

    </div>
  );
}
