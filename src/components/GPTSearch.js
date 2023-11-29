import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {BACKGROUND_IMG} from '../utils/constants'


const GPTSearch = () => {
  return (
    <div>
       <div className="fixed flex -z-10">
        <img
          className="opacity-90"
          src={BACKGROUND_IMG}
          alt="bg"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch