import { URL_OPTION } from '../utils/constants'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {addNowPopularMovies} from '../utils/store/moviesSlice'
import { addNowUpcomingMovies } from '../utils/store/moviesSlice'

const useUpcomingMovies = () => {
    //fetch data from tmdb and update the store
    const dispatch = useDispatch();
    const getNowPopularMovies = async ()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', URL_OPTION)
     const json = await data.json();
    //  console.log(json.results);
     dispatch(addNowUpcomingMovies(json.results))
    }
    useEffect(()=>{
        getNowPopularMovies()
    },[])
}

export default useUpcomingMovies