import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  if (!movies) {
    return;
  }
  //   console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="text-4xl py-2 text-red">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie,index) => (
            <MovieCard key={index} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
