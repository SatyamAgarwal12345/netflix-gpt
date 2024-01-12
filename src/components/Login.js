import React from "react";
import bgImage from "../assets/images/page.jpg";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const signInHandler = ()=>{
        setIsSignIn(!isSignIn)
    }
  return (
    <div>
        <Header />
        <div className="absolute">
          <img  src={bgImage}></img>
        </div>
        <form className=" text-sm text-white absolute bg-black mx-[720px] my-[180px] px-12 py-16 rounded-lg bg-opacity-70" >
            <h1 className="mb-6 font-bold text-xl">{isSignIn?"SIGN IN":"Sihn UP"}</h1>
            {!isSignIn && (<input className="rounded-sm mb-6 px-10 py-3" type="text" placeholder="Enter Name"/>)}
            <input className="rounded-sm mb-6 px-10 py-3" type="text" placeholder="Enter Email"></input><br></br>
            <input className="rounded-sm py-3 px-10" type="password" placeholder="Enter Password"></input><br></br>
            <button className="rounded-sm py-3 px-8 mt-12 w-full bg-red-600 mb-4">{isSignIn?"Sign In":"SIgn UP"}</button>
            <p className="cursor-pointer" onClick={signInHandler}>{isSignIn ? "New to Netflix? Sign UP":"Already a user Sign IN"}</p>
        </form>
      </div>
  );
};

export default Login;
