/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { YOUTUBE_API_URL, YOUTUBE_AUTH_KEY } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoContainer from "./VideoContainer";
import { Link } from "react-router-dom";

const MainContainer = ({ videoCatgory }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [videoCatgory]);
  console.log(videoCatgory);
  const getVideos = async () => {
    const response = await fetch(
      `${YOUTUBE_API_URL}&videoCategoryId=${videoCatgory}&key=${YOUTUBE_AUTH_KEY}`
    );
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:flex-wrap items-center md:ml-10 space-y-2 space-x-2 ">
      {videos?.length === 0 ? (
        <Shimmer />
      ) : (
        videos.map((video) => (
          <Link key={video.id} to={"/youtube/watch?v=" + video.id}>
            <VideoContainer key={video.id} data={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default MainContainer;
