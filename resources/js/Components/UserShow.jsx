import React from 'react';
import TicketType from '@/Components/TicketType';
import {Inertia} from "@inertiajs/inertia";
import {useForm, usePage} from "@inertiajs/inertia-react";
import {FormatDate} from "@/Components/Helpers";
import parseHtml from "html-react-parser";

export default function UserShow({show}) {
  return (
    <div className="p-6 flex space-x-2">
      {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 -scale-x-100" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>*/}
      <div className="flex-1">
        <div className="md:flex border-b-2 items-end">
          <h2 className=" flex-1 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {/*<span className="block">Bienvenue</span>*/}
            <span className="block text-indigo-600">{show.title}</span>
          </h2>
          {/*<div className='text-right py-1'>
            <div class=""><small className="ml-2 text-sm text-gray-600">{FormatDate(show.date)}</small>

            </div>
          </div>*/}

          <div className='text-right py-1'>
            <div className=" text-sm text-gray-800">{FormatDate(show.date)}</div>
          </div>
        </div>
        <div className="mt-1 mr-2 mb-2 text-lgs text-gray-900">
          <div className="flex-1 mr-2 text-orange-700 mb-1 ">{show.place}</div>


          {/*<div className="my-auto">{parseHtml(show.description)}</div>*/}
        </div>
        {/*<p className="mt-4 text-lg text-gray-900">{show.description}</p>*/}
        {show.ticket_types.map(ticketType => (
          <TicketType key={ticketType.id}
                      number={ticketType.tickets.length}
                      ticketType={ticketType}>{ticketType.type}</TicketType>))
        }
      </div>
    </div>
  );
}
