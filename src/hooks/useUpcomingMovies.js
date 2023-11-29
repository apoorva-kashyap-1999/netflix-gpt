import { useEffect } from "react";
import { API_OPTIONS, UPCOMINGMOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";

//custom hook
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMINGMOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    //Memoization
    if (!upcomingMovies) {
      getUpcomingMovies();
    }
  }, [dispatch]);
};

export default useUpcomingMovies;
