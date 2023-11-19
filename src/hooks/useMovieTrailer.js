import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = () => {
    
  const dispatch = useDispatch();
  const getMovieVideos = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/507089/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    //handling if no trailer is present
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
