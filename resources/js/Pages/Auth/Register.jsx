import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import SelectInput from "@/Components/SelectInput";

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        grade: {},
        email: '',
        password: '',
        password_confirmation: '',
    });
  const {grades} = usePage().props;
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="firstname" value="Prénom" />

                    <TextInput
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="mt-1 block w-full"
                        autoComplete="firstname"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.firstname} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="lastname" value="Nom" />

                    <TextInput
                        type="text"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="lastname"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>
                {/*TODO grade select */}
            {/*  <SelectInput
                className="w-full pb-8 pr-6 lg:w-1/2"
                label="Classe"
                name="grade"
                errors={errors.grades}
                value={grade}
                onChange={e => setData(grade, e.target.value)}
              >
                {grades.map(grade=>{
                  <option value={grade.id}>{grade.name}</option>
                })}
              </SelectInput>*/}
              {/*{grades.map(grade=> <span>{grade.name}</span>*/}
              {/*)}*/}
              <div className="mt-4">
                <Select handleSelect={selected=>setData({grade:selected})} items={grades}
                        startItem={grades[0]} name="grade"
                /></div>

              {/*<input type="hidden" name="grade" value="1"  />*/}
                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Mot de passe" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirmer le mot de passe" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        J'ai déjà un compte
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Créer mon compte
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
