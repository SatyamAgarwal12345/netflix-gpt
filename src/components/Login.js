import React from "react";
import bgImage from "../assets/images/page.jpg";
import Header from "./Header";
import { useState, useRef } from "react";
import { Validation } from "../utils/useValidation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/store/userSlice";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const signInHandler = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const submitHandler = () => {
    const message = Validation(email.current.value, password.current.value);
    console.log(message);
    setErrMsg(message);
    if (message) {
      console.log("it is null error message");
      return;
    }
    if (!isSignIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch(adduser({uid:uid,email:email,displayName:displayName}))
            navigate('/browse')
          }).catch((error) => {
          });
          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      console.log("auth sign Up");
    } else {
      //login

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate('/browse')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrMsg(errorCode);
        });
       
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImage}></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" text-sm text-white absolute bg-black mx-[520px] my-[100px] px-12 py-16 rounded-lg bg-opacity-70"
      >
        <h1 className="mb-6 font-bold text-xl">
          {isSignIn ? "SIGN IN" : "Sign UP"}
        </h1>
        {!isSignIn && (
          <input
            className="rounded-sm mb-6 px-10 py-3 bg-gray-700"
            type="text"
            placeholder="Enter Name"
            ref={name}
          />
        )}
        <input
          className="rounded-sm mb-6 px-10 py-3  bg-gray-700"
          type="text"
          placeholder="Enter Email"
          ref={email}
        ></input>
        <br></br>
        <input
          className="rounded-sm py-3 px-10 bg-gray-700"
          type="password"
          placeholder="Enter Password"
          ref={password}
        ></input>
        <br></br>
        <p className="text-red-800 font-bold text-lg mt-4">{errMsg}</p>
        <button
          onClick={submitHandler}
          className="rounded-sm py-3 px-8 mt-6 w-full bg-red-600 mb-4"
        >
          {isSignIn ? "Sign In" : "SIgn UP"}
        </button>
        <p className="cursor-pointer" onClick={signInHandler}>
          {isSignIn ? "New to Netflix? Sign UP" : "Already a user Sign IN"}
        </p>
      </form>
    </div>
  );
};

export default Login;
