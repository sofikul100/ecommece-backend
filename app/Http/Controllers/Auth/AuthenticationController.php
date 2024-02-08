<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class AuthenticationController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name'=>'required',
            'phone'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed',
        ]);

        if(User::where('email', $request->email)->first()){
            return response([
                'message' => 'Email already exists',
                'status'=>400
            ]);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);

        $user->save();

        $token = $user->createToken($request->email)->plainTextToken;
        return response([
            'token'=>$token,
            'user'=>$user,
            'message' => 'Registration Successfully Done',
            'status'=>201
        ]);
    }

    public function login(Request $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if($user && Hash::check($request->password, $user->password)){
            $token = $user->createToken($request->email)->plainTextToken;
            return response([
                'token'=>$token,
                'user'=>$user,
                'message' => 'Welcome To Dashboard Account',
                'status'=>200
            ]);
        }
        return response([
            'message' => 'The Provided Credentials are incorrect',
            'status'=>401
        ]);
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout Successfully',
            'status'=>200
        ]);
    }
    
    public function logged_user(){
        $loggeduser = auth()->user();
        return response([
            'user'=>$loggeduser,
            'message' => 'Logged User Data',
            'status'=>200
        ]);
    }

    public function change_password(Request $request){
        $request->validate([
            'password' => 'required|confirmed',
        ]);
        $loggeduser = auth()->user();
        $loggeduser->password = Hash::make($request->password);
        $loggeduser->save();
        return response([
            'message' => 'Password Changed Successfully',
            'status'=>200
        ]);
    }
}
