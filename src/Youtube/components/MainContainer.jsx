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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PageNotFound from "./PageNotFound";
// import MainContainer from './MainContainer';

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  const videoCatgory = useSelector((store) => store.youtube.videoCatgory);
  const searchQuery = useSelector((store) => store.youtube.searchQuery);
  const [error, setError] = useState(false);
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
    try {
      const response = await fetch(api);
      const data = await response.json();
      if (data?.error?.code) {
        setError(true);
      }
      else {
        setError(false);
        setVideos(data.items);
      }
    } catch (error) {
      console.log(`Error while fetching Videos`, error);
      setError(true);
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap items-center space-y-1 space-x-1 justify-start ">
      {error ? (
        <div className="w-full flex justify-center items-center">
          <PageNotFound />
        </div>
      ) : videos?.length === 0 ? (
        <Shimmer />
      ) : (
        videos?.map((video, i) => (
          <Link
            key={i}
            to={
              "/youtube/watch?v=" +
              (video.id.videoId ? video.id.videoId : video.id)
            }
          >
            <VideoContainer data={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default MainContainer;
