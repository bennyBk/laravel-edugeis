<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;

#use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
        VerifyEmail::toMailUsing(function ($notifiable, $url) {
            return (new MailMessage())
                ->subject(Lang::get('Vérification de votre adresse mail'))
                ->line(Lang::get('Merci de cliquer sur le lien ci-dessous pour vérifier votre adresse mail.'))
                ->action(Lang::get('Vérifier mon adresse mail'), $url)
                ->line(Lang::get('Si vous n\'avez pas créé de compte, aucune action n\'est requise de votre part.'));
        });
    }
}
