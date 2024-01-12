import React from "react";
import logo from "../assets/images/netflix-logo.png";

const Header = () => {
  return (
    <div className="">
      <img className="absolute bg-gradient-to-b from-black p-3 w-32 z-30"src={logo}></img>
    </div>
  );
};

export default Header;
