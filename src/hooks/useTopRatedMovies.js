import  { useEffect } from "react";
import { API_OPTIONS, TOPRATEDMOVIE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies} from "../utils/movieSlice";

//custom hook
const useTopRatedMovies = () => {
const dispatch = useDispatch();
const getTopRatedMovies = async () => {
  const data = await fetch(TOPRATEDMOVIE_API, API_OPTIONS);
  const json = await data.json();
  dispatch(addTopRatedMovies(json.results));
};

useEffect(() => {
    getTopRatedMovies();
}, [dispatch]);

}

export default useTopRatedMovies

