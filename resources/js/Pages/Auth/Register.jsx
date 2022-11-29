import React, {Fragment, useEffect, useState} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
// import Select from '@/Components/Select';
import {Head, Link, useForm, usePage} from '@inertiajs/inertia-react';
import {grades} from "@/Components/Helpers";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Register() {
  // const {grades} = usePage().props;
  // const grades = grades;

  const {data, setData, post, processing, errors, reset} = useForm({
    firstname: '',
    lastname: '',
    grade: grades[0],
    email: '',
    password: '',
    password_confirmation: '',
  });
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
    post('register');
    // Inertia.post('register',data); // bugué ?
  };

  return (
    <GuestLayout>
      <Head title="Register"/>
      <div className="mb-8 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
           role="alert">
        <div className="flex">
          <div className="py-1">
            <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
            </svg>
          </div>
          <div>
            <p className="font-bold">Nous respectons votre vie privée</p>
            <p className="text-sm">Les données renseignées servent exclusivement aux réservations pour le parcours du
              spectateur. Elles ne seront pas transmises à un tiers et seront effacées à la fin de l'année scolaire.</p>
          </div>
        </div>
      </div>
      <form onSubmit={submit}>
        <div>
          <InputLabel forInput="firstname" value="Prénom de l'élève"/>

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

          <InputError message={errors.firstname} className="mt-2"/>
        </div>
        <div className="mt-4">
          <InputLabel forInput="lastname" value="Nom de l'élève"/>

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

          <InputError message={errors.lastname} className="mt-2"/>
        </div>
        {/*TODO grade select */}
        {/*<SelectInput*/}
        {/*  className="w-full pb-8 pr-6 lg:w-1/2"*/}
        {/*  label="Classe"*/}
        {/*  name="grade"*/}
        {/*  errors={errors.grades}*/}
        {/*  value={grade}*/}
        {/*  onChange={e => setData(grade, e.target.value)}*/}
        {/*>*/}
        {/*  {grades.map(grade=>{*/}
        {/*    <option value={grade.id}>{grade.name}</option>*/}
        {/*  })}*/}
        {/*</SelectInput>*/}
        {/*{grades.map(grade=> <span>{grade.name}</span>
              )}*/}
        <div className="mt-4">
          {/*<Select handleSelect={e=>setData("grade",e.target.value)} items={grades}*/}
          <Listbox value={data.grade} onChange={e => setData("grade",e)} name="grade">
            {({open}) => (
              /* TODO style du bloc */
              <div className="">
                <Listbox.Label className="block text-sm font-medium text-gray-700">Classe : </Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button
                    className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                {/*<img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full"/>*/}
                <span className="ml-3 h-6 block truncate">{data.grade}</span>
              </span>
                    <span
                      className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {grades.map((item) => (
                        <Listbox.Option
                          key={item}
                          className={({active}) =>
                            classNames(
                              active ? 'text-white bg-indigo-600' : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }

                          value={item}
                        >
                          {({selected, active}) => (
                            <>
                              <div className="flex items-center">
                                {/*<img src={person.avatar} alt=""*/}
                                {/*     className="h-6 w-6 flex-shrink-0 rounded-full"/>*/}
                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                            {item}
                                              </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            )}
          </Listbox>
          {/*avant */}
          {/*<Select items={grades} name="grade" value={selected} onChange={setSelected}*/}

          <InputError message={errors.grade} className="mt-2"/>

        </div>

        {/*<input type="hidden" name="grade" value="1"  />*/}
        <div className="mt-4">
          <InputLabel forInput="email" value="Email du parent"/>

          <TextInput
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="email"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.email} className="mt-2"/>
        </div>

        <div className="mt-4">
          <InputLabel forInput="password" value="Mot de passe (au moins 8 caractères)"/>

          <TextInput
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.password} className="mt-2"/>
        </div>

        <div className="mt-4">
          <InputLabel forInput="password_confirmation" value="Confirmer le mot de passe"/>

          <TextInput
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2"/>
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
