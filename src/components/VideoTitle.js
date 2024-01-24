import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full md:w-full lg:w-full xl:w-full aspect-video pt-[20%] px-4 md:px-8 lg:px-12 xl:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
        {title}
      </h1>
      <p className="w-full lg:w-2/3 xl:w-1/3">{overview}</p>
      <div className="flex flex-col lg:flex-row items-center mt-4">
        <div className="flex flex-col md:flex-row items-center w-full">
          <button className="mb-2 md:mb-0 mr-0 md:mr-4 text-black bg-white p-3 lg:p-4 px-6 lg:px-8 text-base lg:text-lg xl:text-xl bg-opacity-50 rounded-lg">
            PLAY
          </button>
          <button className="text-black bg-white p-3 lg:p-4 px-6 lg:px-8 text-base lg:text-lg xl:text-xl bg-opacity-50 rounded-lg">
            MoreInfo
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
