import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import {useForm, Head, usePage} from '@inertiajs/inertia-react';
import UserShow from "@/Components/UserShow";

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
    /*const {tickets} = usePage().props;*/
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
    const ticketsByShow = user.tickets.reduce((group,ticket)=>{
        const {show_id,show} = ticket;
        // console.log(show);
        group[show_id] = group[show_id] ?? {...show};
        group[show_id].tickets = group[show_id].tickets ?? [];
        group[show_id].tickets.push(ticket);
        return group;
    })
    // console.log(ticketsByShow);
    // return;

    // renvoit un tableau de tableaux qui regroupent les tickets par spectacle.
    // const ticketsByShow = groupBy1(user.tickets, 'show_id');

    // console.log(ticketsByShow);
    // TODO renvoit un tableau de tableaux qui créée l'arbo : spectacle / type de ticket / ticket.
    const r = ticketsByShow.map(show => {
        // console.log(show);

        // return groupBy1(show,"ticket_type_id");
        return show.reduce((group, ticket) => {
            const {ticket_type_id,ticket_type} = ticket;
            // const {...ttprops} = ticket_type;
            // console.log(ticket_type_id);
            // const id = ticket.ticket_type_id;
            group[ticket_type_id] = group[ticket_type_id] ?? {ticket_type};
            group[ticket_type_id].tickets = group[ticket_type_id].tickets ?? [];
            // group[ticket_type_id].ticket_type = group[ticket_type_id].ticket_type ?? ticket_type;
            // console.log(group[ticket_type_id].ticket_type);
            // console.log(id);
            group[ticket_type_id].tickets.push(ticket);
            // show[{ticket.ticket_type_id}] = show[{ticket.ticket_type_id}] ?? [];
            // show[{ticket.ticket_type_id}]
            // }.push(ticket);
            return group;
        },[])

        // groupBy1(show,'ticket_type_id');
        // console.log(show);

    })
    // console.log(ticket))
    console.log(r);
    // console.log(groupBy2);
    return;
    const showTicketsByTicketType = ticketsByShow.map(show => {
        show.map(ticket => {
            console.log(ticket.ticket_type);
        })
        // console.log(ticket);
        // groupBy(ticket, 'ticket_type')
    });
    // console.log(showTicketsByTicketType);
    return;
    // const ticketTypesByShow = groupBy(ticketsByShow,''
    const TIcketsTypesByShow = userTicketsGroupedByShow.reduce((show, ticket) => {
        const {show_id} = show;
        // const {ticket_types} = ticket;
        group[show_id] = group[show_id] ?? [];
        // group[show.id].tickets = group[show.id].tickets ?? [];
        group[show_id].push(ticket);
        /*group[show.id].ticket_types = group[show.id].ticket_types ?? [];*/
        /*group[show.id].ticket_types.push(ticket_types);*/
        return group;
    }, [])
    // .filter(a => a);
    return;
    // console.log(auth.user.tickets);
    /*const showtickets = tickets.map(show => {show.data : }*/
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Mes places"/>
            <div>
                {/*{auth.user.tickets}*/}
            </div>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {userTicketsGroupedByShow.map(show =>
                            <UserShow key={show.id} show={show}/>
                        // <Show key={show.id} show={show} user={auth.user} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
