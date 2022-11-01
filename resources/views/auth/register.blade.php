<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <form method="POST" action="{{ route('register') }}">
            @csrf

            <!-- Firstname -->
            <div>
                <x-input-label for="firstname" :value="__('Prénom')" />

                <x-text-input id="firstname" name="firstname" class="block mt-1 w-full" type="text" firstname="firstname" :value="old('firstname')" required autofocus />

                <x-input-error :messages="$errors->get('firstname')" class="mt-2" />
            </div>
            <!-- Lastname -->
            <div>
                <x-input-label for="lastname" :value="__('Nom')" />

                <x-text-input id="lastname" name="lastname" class="block mt-1 w-full" type="text" lastname="lastname" :value="old('lastname')" required />

                <x-input-error :messages="$errors->get('lastname')" class="mt-2" />
            </div>
            <!-- Class -->
            <div>
                <x-input-label for="class" :value="__('Classe')" />

                <x-text-input id="class" name="class" class="block mt-1 w-full" type="text" class="class" :value="old('class')" required  />

                <x-input-error :messages="$errors->get('class')" class="mt-2" />
            </div>
            <!-- Email Address -->
            <div class="mt-4">
                <x-input-label for="email" :value="__('Email')" />

                <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required />

                <x-input-error :messages="$errors->get('email')" class="mt-2" />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-input-label for="password" :value="__('Password')" />

                <x-text-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required autocomplete="new-password" />

                <x-input-error :messages="$errors->get('password')" class="mt-2" />
            </div>

            <!-- Confirm Password -->
            <div class="mt-4">
                <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

                <x-text-input id="password_confirmation" class="block mt-1 w-full"
                                type="password"
                                name="password_confirmation" required />

                <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>

                <x-primary-button class="ml-4">
                    {{ __('Register') }}
                </x-primary-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
