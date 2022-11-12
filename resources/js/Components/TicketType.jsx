import React from 'react';

export default function TicketType(props) {
    const {ticketType} = props;
    return (
        <div>{ticketType.type}
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
            <span>{props.number}</span>
        </div>
    )
}
