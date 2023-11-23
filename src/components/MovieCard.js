import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-2'>
        <img className='rounded transform hover:scale-110 ease-in-out duration-200' src={IMG_CDN_URL+posterPath} alt="movieposter"/>
    </div>
  )
}

export default MovieCard