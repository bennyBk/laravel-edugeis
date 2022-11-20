import React from 'react';

export default function TicketType(props) {
    const {ticketType} = props;
    const btnclassName = "items-center ml-0 py-1 pl-2 pr-2 text-sm font-bold lg:pr-3  text-500 shadow"
    return (
        <div className="mr-2 flex py-1 flex-1 border-b items-center">
            <div class="w-1/5 mr-1 ">
                {(props.number > 0) &&
                    <div className='rounded-lg pr-1 font-bold w-12 text-right bg-white text-indigo-800' >{props.number} &times;&nbsp;</div>
                }
            </div>
            <div class="flex-1">{ticketType.type}</div>
            <div className="flex ml-2">
                {props.decrement && <button className={btnclassName+" rounded-l-md bg-white text-indigo-600"} onClick={props.decrement}>-</button>}
                {props.increment && <button className={btnclassName+" rounded-r-md bg-indigo-600 text-white"} onClick={props.increment}>+</button>}
            </div>
        </div>
    )
}
