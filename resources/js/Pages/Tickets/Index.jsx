import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import {useForm, Head, usePage, Link} from '@inertiajs/inertia-react';
import UserShow from "@/Components/UserShow";
import Show from "@/Components/Show";
import {Inertia} from "@inertiajs/inertia";

export default function Index() {
  const groupBy1 = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, []);
  };
  const {data, setData, post, processing, reset, errors} = useForm({
    message: '',
  });

  // console.log(usePage().props);
  const {auth} = usePage().props;
  const {user} = auth;
  const [btnVisible, setBtnVisible] = useState(true);
  // console.log(user);

  // const groupBy2 = auth.user.tickets.reduce((group, ticket) => {
  //     const {show_id} = ticket;
  //     // const {ticket_types} = ticket;
  //     group[show_id] = group[show_id] ?? [];
  //     // group[show.id].tickets = group[show.id].tickets ?? [];
  //     group[show_id].push(ticket);
  //     /*group[show.id].ticket_types = group[show.id].ticket_types ?? [];*/
  //     /*group[show.id].ticket_types.push(ticket_types);*/
  //     return group;
  // }, [])
  // const groupByCategory = user.tickets.groupBy(ticket => {
  //     return ticket.show;
  // });
  // retourne [ {...show, tickets:[] } ]
  const ticketsByShow = user.tickets.reduce((group, ticket) => {
    const {show_id, show} = ticket;
    // console.log(show);
    group[show_id] = group[show_id] ?? {...show};
    group[show_id].tickets = group[show_id].tickets ?? [];
    group[show_id].tickets.push(ticket);
    return group;
  }, [])
    // le fait de créer un tableau vide au départ ajoute des empty slots ? (cf :
    // console.log(ticketsByShow);
    .filter(a => a);

  // console.log(ticketsByShow);
  // return;

  // renvoit un tableau de tableaux qui regroupent les tickets par spectacle.
  // const ticketsByShow = groupBy1(user.tickets, 'show_id');

  // console.log(ticketsByShow); // show / tickets
  // return;
  // TODO renvoit un tableau de tableaux qui créée l'arbo : spectacle / type de ticket / ticket.
  // const r = ticketsByShow.map(show => {
  // console.log(show);

  // return groupBy1(show,"ticket_type_id");

  //retourne ??
  const ticketsByTTandShow = ticketsByShow.map(show => {
    // const ticketsByTTandShow = ticketsByShow[0];
    // ticketsByShow.map(show=> {
    const ticket_types = show.tickets.reduce((group, ticket) => {
      const {ticket_type_id, ticket_type} = ticket;
      // const {...ttprops} = ticket_type;
      // console.log(ticket_type_id);
      // const id = ticket.ticket_type_id;
      group[ticket_type_id] = group[ticket_type_id] ?? {...ticket_type};
      group[ticket_type_id].tickets = group[ticket_type_id].tickets ?? [];
      // group[ticket_type_id].ticket_type = group[ticket_type_id].ticket_type ?? ticket_type;
      // console.log(group[ticket_type_id].ticket_type);
      // console.log(id);
      group[ticket_type_id].tickets.push(ticket);
      // show[{ticket.ticket_type_id}] = show[{ticket.ticket_type_id}] ?? [];
      // show[{ticket.ticket_type_id}]
      // }.push(ticket);
      return group;
    }, []).filter(a => a);
    // console.log(ticket_types);
    show.ticket_types = ticket_types;
    return show;
  });
  // console.log(ticketsByTTandShow);
  // créer
  // console.log(auth.user.tickets);
  function sendTicketConfirmMail() {
    setBtnVisible(false);
    Inertia.get(route('tickets.confirm'),{},{preserveState: true})
  }

  /*const showtickets = tickets.map(show => {show.data : }*/
  return (
    <AuthenticatedLayout auth={auth}>
      <Head title="Mes places"/>
      {/* TODO button avec  preserveState: true,*/}
      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        {btnVisible && (
          <div className="">
            <button
              type="button"
              className="group relative text-lg flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"              onClick={() => sendTicketConfirmMail()}
            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

              <span className="ml-2">Envoyer un mail récapitulatif</span></button>
          </div>
        )}
        <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
          {ticketsByTTandShow.map(show =>
              <UserShow key={show.id} show={show}/>
            // <Show key={show.id} show={show} user={auth.user} />
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
