import React from "react";
import logo from "../assets/images/netflix-logo.png";
import profile from "../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../utils/store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-24 md:w-28" src={logo} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center">
          <h1 className="m-2 font-bold text-lg md:text-2xl text-white">
            WELCOME {user.displayName}
          </h1>
          <img className="w-10 h-10 md:w-12 md:h-12 mr-2" src={profile} alt="Profile" />
          <button
            onClick={signOutHandler}
            className="bg-red-500 rounded-2xl px-2 text-white text-sm md:text-base"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
