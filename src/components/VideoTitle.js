import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-2xl md:text-5xl font-bold">{title}</h2>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" px-6 md:px-10 py-2 bg-white text-black font-bold text-md md:text-lg rounded m-2 hover:bg-opacity-70">Play</button>
        <button className="px-5 md:px-10 py-2 bg-gray-400 text-md md:text-lg text-white  font-bold rounded m-2 hover:bg-opacity-50">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
