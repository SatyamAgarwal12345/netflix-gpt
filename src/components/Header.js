import React from "react";
import logo from "../assets/images/netflix-logo.png";
import profile from "../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useDispatch, useSelector } from "react-redux";
import { adduser ,removeUser} from "../utils/store/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user)
  const navigate = useNavigate();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        navigate("/")
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-28" src={logo}></img>
      {user &&<div className="flex p-2">
        <h1 className="m-2 font-bold text-2xl text-white">WELCOME {user.displayName}</h1>
        <img className="w-12 h-12 mr-2" src={profile}></img>
        <button
          onClick={signOutHandler}
          className="bg-red-500 rounded-2xl  px-2  text-white"
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
