import React from "react";
import bgImage from "../assets/images/page.jpg";
import Header from "./Header";
import { useState, useRef } from "react";
import { Validation } from "../utils/useValidation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/store/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
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
    setErrMsg(message);

    if (message) {
      return;
    }

    if (!isSignIn) {
      // signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              adduser({ uid: uid, email: email, displayName: displayName })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode);
        });
    } else {
      // login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode);
        });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Header />
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgImage}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-sm text-white absolute bg-black mx-[5%] my-[5%] md:mx-[20%] md:my-[20%] lg:mx-[30%] lg:my-[30%] xl:mx-[40%] xl:my-[40%] 2xl:mx-[50%] 2xl:my-[50%] px-6 md:px-12 py-8 md:py-16 rounded-lg bg-opacity-70"
      >
        <h1 className="mb-6 font-bold text-xl">
          {isSignIn ? "SIGN IN" : "Sign UP"}
        </h1>
        {!isSignIn && (
          <input
            className="rounded-sm mb-6 px-4 md:px-10 py-2 md:py-3 bg-gray-700"
            type="text"
            placeholder="Enter Name"
            ref={name}
          />
        )}
        <input
          className="rounded-sm mb-6 px-4  md:px-10 py-2 md:py-3 bg-gray-700"
          type="text"
          placeholder="Enter Email"
          ref={email}
        />
        <br />
        <input
          className="rounded-sm py-2 md:py-3 px-4 md:px-10 bg-gray-700"
          type="password"
          placeholder="Enter Password"
          ref={password}
        />
        <br />
        <p className="text-red-800 font-bold text-lg mt-4">{errMsg}</p>
        <button
          onClick={submitHandler}
          className="rounded-sm py-2 md:py-3 px-4 md:px-8 mt-4 md:mt-6 w-full bg-red-600 mb-2 md:mb-4"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={signInHandler}>
          {isSignIn ? "New to Netflix? Sign Up" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
