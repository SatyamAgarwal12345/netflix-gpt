import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) {
    return <div>No movies available</div>;
  }

  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-64 ">
        <MovieList
          title={"now playing movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"popular"} movies={movies.nowPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowUpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
