import  { useEffect } from "react";
import { API_OPTIONS, NOWPLAYINGMOVIE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

//custom hook
const useFetchNowPlayingMovies = () => {
const dispatch = useDispatch();
const getNowPlayingMovies = async () => {
  const data = await fetch(NOWPLAYINGMOVIE_API, API_OPTIONS);
  const json = await data.json();
  console.log(json);
  dispatch(addNowPlayingMovies(json.results));
};

useEffect(() => {
  getNowPlayingMovies();
}, [dispatch]);

}

export default useFetchNowPlayingMovies

