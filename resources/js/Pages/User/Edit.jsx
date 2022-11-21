import React, {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import SelectInput from "@/Components/SelectInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit(props) {
  // console.log(props);
  const {auth} = props;
  const {user} = auth;
  const {grades} = props;
  const initGrade = grades.find(grade => grade.id === user.grade_id);
  // console.log(grades.find(grade => grade.id === user.grade_id));
  const {data, setData, post,put, processing, errors, reset} = useForm({
    grade: initGrade || '',
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

    Inertia.put(route('user.update'),data);
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
                <Select handleSelect={selected=>setData({grade:selected})} items={grades}
                                            startItem={data.grade} name="grade"
              /></div>

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
