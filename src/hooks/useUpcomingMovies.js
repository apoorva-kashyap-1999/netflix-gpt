import  { useEffect } from "react";
import { API_OPTIONS, UPCOMINGMOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

//custom hook
const useUpcomingMovies = () => {
const dispatch = useDispatch();
const getUpcomingMovies = async () => {
  const data = await fetch(UPCOMINGMOVIES_API, API_OPTIONS);
  const json = await data.json();
  dispatch(addUpcomingMovies(json.results));
};

useEffect(() => {
    getUpcomingMovies();
}, [dispatch]);

}

export default useUpcomingMovies

