import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // this hook fetch data from tmdb and update the store
  useNowPlayingMovies();
  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
