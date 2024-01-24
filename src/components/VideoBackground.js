import React, { useEffect } from "react";
import { URL_OPTION } from "../utils/constants";
import { useState } from "react";

const VideoBackground = ({ movie_id }) => {
  const [movieKey, setMovieKey] = useState(null);

  //fetch the trailter based on ID of list of now playing movies
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=apiKey&language=en-US`,
      URL_OPTION
    );
    const json = await data.json();
    //   console.log(json.results);
    const filteradata = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteradata.length ? filteradata[0] : json.results[0];
    console.log(trailer);
    setMovieKey(trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        //getting trailrer from youtube based on key from filtered first movie trailer
        className="w-full aspect-video "
        src={
          "https://www.youtube.com/embed/" + movieKey + "?si=A3D4DyLs6xIU-xsu&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
