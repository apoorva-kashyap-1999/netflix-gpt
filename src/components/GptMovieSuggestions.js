import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovieNames, gptMovieSearchResults } = gpt;
  if (!gptMovieNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white rounded"> 
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovieSearchResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
