import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;
  // getting first movie from the list of nowplaying movies and extracting the required datas
  const movie = movies[0];
  // console.log(movie);
  const { original_title, overview, id } = movie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      {/*handle title and some ui with descriptions */}
      <VideoBackground movie_id={id} />
      {/* handle background video  */}
    </div>
  );
};

export default MainContainer;
