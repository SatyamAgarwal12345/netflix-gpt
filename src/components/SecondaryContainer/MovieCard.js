import React from "react";
import { CDN_IMG_URL } from "../../utils/constants";
const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-36 pr-4 ">
      <img className="flex" src={CDN_IMG_URL + poster_path}></img>
    </div>
  );
};

export default MovieCard;
