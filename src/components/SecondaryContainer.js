import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    movie.nowPlayingMovies &&
    movie.popularMovies && (
      // overlap secondary container on top of trailer
      <div className="secondary bg-black">
        <div className="-mt-64 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movie.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movie.popularMovies} />
          <MovieList title={"Recommended"} movies={movie.nowPlayingMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movie.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
