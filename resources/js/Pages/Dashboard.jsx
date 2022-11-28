import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bienvenue</h2>}
        >
            <Head title="Bienvenue" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Bienvenue {props.auth.user.firstname} {props.auth.user.lastname} !</div>
                    </div>
                  <div className="bg-blue-50 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md"
                       role="alert">
                    <div className="flex">
                      <div className="py-1">
                        <svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                          <path
                            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold">Petit guide d'utilisation</p>
                        <div className="mb-2">
                          <ul>
                            <li className="mt-2">
                              <p>- La sélection des places se fait dans la page suivante : "Spectacles"</p>

                            </li>
                            <li className="mt-2">
                            <p>- Attention : lorsque vous choisissez une place, celle-ci vous est immédiatement
                            attribuée. <br/>Pour libérer une place qui ne vous intéresse plus, merci de bien vouloir
                            l'enlever de votre sélection.</p>

                            </li>
                            <li className="mt-2">
                              <p>- La page "Mes places" vous fournit un récapitulatif de votre demande de réservation.</p>

                            </li>
                          </ul>

                          <p>- A tout moment, vous pouvez envoyer ce récapitulatif par mail, en cliquant sur le bouton
                            "Envoyer un mail récapitulatif".</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
