/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  YOURTUBE_RECOMMNDED,
} from "../utils/constants";
import { Link } from "react-router-dom";
import SideVideo from "./SideVideo";
import { SideShimmer } from "./Shimmer";
// import MainContainer from './MainContainer';

const Reccomended = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (videos.length===0) getVideos(`${YOURTUBE_RECOMMNDED}`);
  },[]);

  const getVideos = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="w-full flex flex-col rounded-lg ">
      {videos?.length === 0 ? (
        <SideShimmer />
      ) : (
        videos.map((video, i) => (
          <Link
            key={i}
            to={
              "/youtube/watch?v=" +
              (video.id.videoId ? video.id.videoId : video.id)
            }
          >
            <SideVideo data={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Reccomended;
