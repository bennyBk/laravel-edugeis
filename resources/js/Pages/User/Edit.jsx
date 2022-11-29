import React, {Fragment, useEffect} from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {grades} from "@/Components/Helpers";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Edit(props) {
  const {auth} = props;
  const {user} = auth;
  const initGrade = grades.find(grade => grade === auth.user.class);
  // console.log(grades.find(grade => grade === user.class));
  const {data, setData, post, put, processing, errors, reset} = useForm({
    class: initGrade,
    password_confirmation: '',
    firstname: user.firstname || '',
    lastname: user.lastname || '',
    email: user.email || '',
    password: user.password || '',

  });
  // const {grades} = usePage().props;

  // console.log(user);
  // const {auth} = usePage().props;
  // console.log(auth);

  // const {auth} = usePage().props;
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
    Inertia.put(route('user.update'), data);
  };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mon compte</h2>}
    >
      <Head title="Mon compte"/>
      <div className="py-4">
        <div className="mt-6 max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 pt-0 sm:pt-0 lg:pt-0">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
            <form onSubmit={submit}>
              <div>
                <InputLabel forInput="firstname" value="Prénom"/>

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
              <div>
                <InputLabel forInput="lastname" value="Nom"/>

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
                <Listbox value={data.class} onChange={e => setData("class", e)} name="class">
                  {({open}) => (
                    /* TODO style du bloc */
                    <div className="">
                      <Listbox.Label className="block text-sm font-medium text-gray-700">Classe : </Listbox.Label>
                      <div className="relative mt-1">
                        <Listbox.Button
                          className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                {/*<img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full"/>*/}
                <span className="ml-3 h-6 block truncate">{data.class}</span>
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
                                      <span
                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
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
              </div>

              {/*<input type="hidden" name="grade" value="1"  />*/}
              <div className="mt-4">
                <InputLabel forInput="email" value="Email"/>

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
                <InputLabel forInput="password" value="Changer mon mot de passe"/>

                <TextInput
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  handleChange={onHandleChange}
                />

                <InputError message={errors.password} className="mt-2"/>
              </div>

              <div className="mt-4">
                <InputLabel forInput="password_confirmation" value="Confirmer le nouveau mot de passe"/>

                <TextInput
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  handleChange={onHandleChange}
                />

                <InputError message={errors.password_confirmation} className="mt-2"/>
              </div>

              <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ml-4 bg-indigo-800" processing={processing}>
                  Mettre mon compte à jour
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
