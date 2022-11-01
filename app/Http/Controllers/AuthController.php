<?php

namespace App\Http\Controllers;


use App\Models\Grade;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            // TODO verif si c classe OK a la crea
            'class' => 'required|string|max:4',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
            //    'error'return redirect('post/create')
            //->withErrors($validator)
            //->withInput();
        }
        //TODO gérer user déjà existant

        // Retrieve the validated input...
        $validatedData = $validator->validated();
        // TODO retrouver la classe =
        $grade = Grade::where(['name' => $validatedData['class']])->firstOr(function () {
            return response()->json(['errors' => ['class' => 'not found']], 401);
        });
        //return response()->json(['class' => $grade->name]);


        $user = User::create([
            'firstname' => $validatedData['firstname'],
            'lastname' => $validatedData['lastname'],
            'email' => $validatedData['email'],
            'class' => $validatedData['class'],
            'grade_id' => $grade->id,
            'password' => Hash::make($validatedData['password']),
        ]);
        /* https://laravel.com/docs/9.x/verification */
        event(new Registered($user));
        //return response()->json($user);
        //if (!$user) return response()->json([
        //    'error'
        //]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function me(Request $request)
    {
        return $request->user();
    }
}


