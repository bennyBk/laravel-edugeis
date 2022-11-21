import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
              Merci pour votre inscription ! <br/>
              Avant de commencer pourriez-vous confirmer votre adresse email en cliquant sur le lien qui vient de vous être envoyé.
              <br/>Si vous ne l'avez pas reçu, le bouton ci-dessous vous permettra de le renvoyer.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                  Un nouveau lien de vérification vient de vous être envoyé à l'adresse mail que vous avez renseigné à votre inscription.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton processing={processing}>Renvoyer le mail de vérification</PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Déconnexion
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
