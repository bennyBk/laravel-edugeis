import React from 'react';
export function FormatDate(date) {
  const dateOptions = { weekday: "short", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
  const dateFormatted = new Date(date).toLocaleString('fr-FR', dateOptions);
  return (
    <span className="text-nowrap flex-nowrap align-middle text-center flex-inline flex text-nowrap">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
           className="w-6 h-6 inline">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
      </svg>
      <span className="self-center ml-2">{dateFormatted}</span>
    </span>
  )
}
export const grades = [
  '5e1',
  '5e2',
  '5e3',
  '5e4',
  '5e5',
  '5e6',
  '4e1',
  '4e2',
  '4e3',
  '4e4',
  '4e5',
  '4e6',
  '3e1',
  '3e2',
  '3e3',
  '3e4',
  '3e5'
];
