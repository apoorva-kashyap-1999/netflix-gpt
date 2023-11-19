import React from "react";
import { YOUTUBE_EMBED_LINK } from "../utils/constants";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer();

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={YOUTUBE_EMBED_LINK + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
