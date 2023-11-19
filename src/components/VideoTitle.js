import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-36 px-14">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="p-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="px-10 py-2 bg-gray-300 text-black text-lg rounded m-2 bg-opacity-50">Play</button>
        <button className="px-10 py-2 bg-gray-400 text-lg text-white rounded m-2">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
