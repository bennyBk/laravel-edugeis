<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Grade;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Validation\Rules;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user->loadMissing('tickets');
        return (new UserResource($user))->response();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //dd($request);

        $user = Auth::user();
        $validator = Validator::make($request->json()->all(), [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            //'grade' => 'required|string|max:4',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'password' => ['nullable','string','min:8',Rules\Password::defaults()]
        ]);
        //if ($validator->fails()) {
        //    return redirect()->back()->with(['errors'=>$validator->errors()], 401);
            //return response()->json(['errors' => $validator->errors()], 401);
            //    'error'return redirect('post/create')
            //->withErrors($validator)
            //->withInput();
        //}
        $validatedData = $validator->validated();
        dd($validatedData);
        $validatedData = array_filter($validatedData);
        // retrouver la classe =
        //if($request->get('grade')){
        //    $gradeId = $request->get('grade')['id'];
        //    $grade = Grade::findOrFail($gradeId);
        //    $validatedData['grade_id'] = $grade->id;
        //    $validatedData['class'] = $grade->name;
        //}
        if(isset($validatedData['password']))
            $validatedData['password'] = Hash::make($validatedData['password']);

        $user->update($validatedData);
        return redirect()->back()->with('success', 'Votre compte a été mis à jour');

    }

    public function edit()
    {
        return Inertia::render('User/Edit');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function getTickets($id)
    {
        return $id;
    }
}
