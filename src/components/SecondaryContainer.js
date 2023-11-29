import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    movie.nowPlayingMovies &&
    movie.popularMovies && movie.topRatedMovies && movie.upcomingMovies && (
      // overlap secondary container on top of trailer
      <div className="secondary bg-black">
        <div className="mt-0 md:-mt-64 pl-0 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
          <MovieList title={"TopRated"} movies={movie.topRatedMovies} />
          <MovieList title={"Popular"} movies={movie.popularMovies} />
          <MovieList title={"Recommended"} movies={movie.nowPlayingMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movie.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
