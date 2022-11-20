import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
  return (
    <>
      <div className="bg-gray-50">
        <div className="flex m-4">
          <div className="flex-none flex items-center">
            <img src="/logo_col6.png" alt="logo college Geispitz" />
          </div>
          <div
            className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Bienvenue {props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}</span>
              <span className="block text-indigo-600">Parcours du spectateur</span>
              <span className="block text-orange-600">2022-23</span>
            </h2>
            {!props.auth.user && (
              <>
                <div className="mt-2 text-gray-600 dark:text-gray-900 text-sm">
                  Bienvenue sur l'interface de demande de réservation de billets dans le cadre du parcours du
                  spectateur.

                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-900 text-sm">
                  Pour continuer, vous allez devoir vous connecter si vous avez déjà un compte, ou bien créer votre
                  compte.
                </div>
              </>
            )}
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">

                {props.auth.user ? (
                  <Link href={route('dashboard')}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">
                    C'est parti
                  </Link>
                ) : (
                  <>
                    <Link href={route('login')}
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">
                      Me connecter
                    </Link>

                    <Link
                      href={route('register')}
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                    >
                      Créer mon compte
                    </Link>
                  </>
                )}


              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
