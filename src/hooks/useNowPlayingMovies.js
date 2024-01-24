import { URL_OPTION } from '../utils/constants'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from '../utils/store/moviesSlice'

const useNowPlayingMovies = () => {
    //fetch data from tmdb and update the store
    const dispatch = useDispatch();
    const getNowPlayingMovies = async ()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', URL_OPTION)
     const json = await data.json();
    //  console.log(json.results);
     dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
       getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies