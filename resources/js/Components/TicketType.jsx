import React from 'react';

export default function TicketType(props) {
    const {ticketType} = props;
    const btnclassName = "items-center ml-0 py-1 pl-2 pr-2 text-sm font-bold lg:pr-3  text-500 shadow"
    return (
        <div className="mr-4 flex flex-1">
            {(props.number > 0) &&
                <span>{props.number} &times;&nbsp;</span>
            }
            {ticketType.type}
            <div className="flex ml-2">
                {props.decrement && <button className={btnclassName+" rounded-l-md bg-gray-100 text-indigo-600"} onClick={props.decrement}>-</button>}
                {props.increment && <button className={btnclassName+" rounded-r-md bg-indigo-600 text-white"} onClick={props.increment}>+</button>}
            </div>
        </div>
    )
}
