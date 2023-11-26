import React from "react";
import  language  from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const languageName = useSelector((store) => store.config.language);
    // console.log(languageName)
  return (
    <div className="pt-[10%]  flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded">
        <input className="p-4 m-4 col-span-8 bg-slate-100" type="text" placeholder= {language[languageName].gptSearchPlaceHolder}/>
        <button className="col-span-4 px-4 m-4 bg-red-600 rounded text-white">{language[languageName].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
