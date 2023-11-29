import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageName = useSelector((store) => store.config.language);
  // console.log(languageName)
  const searchText = useRef(null);

  const searchMovieInTMDB = async (movieName) => {
    //search movie data in tmdb
    const movieResult = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movieResult.json();
    // console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      "give me names only of 5 movies, like the example result given ahead : Conjuring, Pari, Anabelle";
    //Make an api call to open ai to search this input
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content;
    //console.log(gptResults.choices);

    //array of movies
    const movieNames = gptMovies
      .split("\n") // Split the string by newline characters to get an array of lines
      // .slice(1) // Exclude the first line containing the statement
      .map((line) => line.replace(/^\d+\.\s/, "").trim()) // Remove numbering and trim whitespace
      .filter((movie) => movie);
    //console.log(movieNames);

    //for each movie will call tmdb search movie
    const promiseArrayOfMovies = movieNames.map((movie) =>
      searchMovieInTMDB(movie)
    );
    //array of promises since searchMovieInTMDB is async it will need time to resolve
    //array of arrays as movies are coming diff languages if available
    const tmdbResults = await Promise.all(promiseArrayOfMovies);
    dispatch(
      addGptMovieResult({ movieNames: movieNames, movieData: tmdbResults })
    );
    //console.log(tmdbResults);
  };

  return (
    <div className="md:pt-[10%] pt-[45%]  flex justify-center">
      <form
        className="-w-full md:w-1/2 bg-black grid grid-cols-12 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-8 bg-slate-100"
          type="text"
          placeholder={language[languageName].gptSearchPlaceHolder}
        />
        <button
          className="col-span-4 px-4 m-4 bg-red-600 rounded text-white"
          onClick={handleGptSearchClick}
        >
          {language[languageName].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
