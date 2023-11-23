import  { useEffect } from "react";
import { API_OPTIONS, POPULARMOVIE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

//custom hook
const usePopularMovies = () => {
const dispatch = useDispatch();
const getPopularMovies = async () => {
  const data = await fetch(POPULARMOVIE_API, API_OPTIONS);
  const json = await data.json();
  dispatch(addPopularMovies(json.results));
};

useEffect(() => {
  getPopularMovies();
}, [dispatch]);

}

export default usePopularMovies

