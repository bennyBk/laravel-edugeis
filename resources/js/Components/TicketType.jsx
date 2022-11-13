import React from 'react';

export default function TicketType(props) {
    const {ticketType} = props;
    const btnclassName = "items-center ml-0 py-1 pl-2 pr-2 text-sm font-semibold lg:pr-3 bg-purple-300 shadow"
    return (
        <div className="mr-4">
            {(props.number > 0) &&
                <span>{props.number} &times;&nbsp;</span>
            }
            {ticketType.type}
            <div className="inline-flex ml-2">
                {props.decrement && <button className={btnclassName+" rounded-l-md"} onClick={props.decrement}>-</button>}
                {props.increment && <button className={btnclassName+" rounded-r-md"} onClick={props.increment}>+</button>}
            </div>
        </div>
    )
}
