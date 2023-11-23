import React from "react";
import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useFetchNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {/* 
      Main container
       - Video Background
       -Video Title
      Secondary Container
       - Movie Lists
         - Movies cards
       
       */}
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  );
};

export default Browse;
