
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'



const Browse = () => {
  // this hook fetch data from tmdb and update the store
  useNowPlayingMovies()
  return (
    <div><Header/></div>
  )
}

export default Browse