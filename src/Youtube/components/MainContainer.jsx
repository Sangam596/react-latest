/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  YOUTUBE_API_URL,
  YOUTUBE_AUTH_KEY,
  YOUTUBE_SEARCH_VIDEOS,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoContainer from "./VideoContainer";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import MainContainer from './MainContainer';

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  const videoCatgory = useSelector((store) => store.youtube.videoCatgory);
  const location = useLocation();
  const isWatchPage = location.pathname.startsWith("/watch");
  const searchQuery = useSelector((store) => store.youtube.searchQuery);

  useEffect(() => {
    getVideos(
      `${YOUTUBE_API_URL}&videoCategoryId=${videoCatgory}&key=${YOUTUBE_AUTH_KEY}`
    );
  }, [videoCatgory]);

  useEffect(() => {
    if (!searchQuery) return;
    getVideos(
      `${YOUTUBE_SEARCH_VIDEOS}&q=${searchQuery}&key=${YOUTUBE_AUTH_KEY}`
    );
  }, [searchQuery]);

  const getVideos = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:flex-wrap items-center md:ml-10 space-y-2 space-x-2 ">
      {videos?.length === 0 ? (
        <Shimmer />
      ) : (
        videos.map((video, i) => (
          <Link key={i} to={"/youtube/watch?v=" +( video.id.videoId ? video.id.videoId : video.id)}>
            <VideoContainer data={video} />
          </Link>
        ))
      )}
    </div>
  );
};



export default MainContainer;
