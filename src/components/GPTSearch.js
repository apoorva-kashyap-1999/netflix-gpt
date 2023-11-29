import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed flex -z-10">
        <img className="h-screen object-cover w-screen  opacity-90" src={BACKGROUND_IMG} alt="bg" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
