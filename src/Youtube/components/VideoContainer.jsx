/* eslint-disable react/prop-types */

import { CircleOff } from "lucide-react";
import { useSelector } from "react-redux";

const VideoContainer = ({data}) => {
  const { statistics, snippet }  = data;
  const viewCount = statistics?.viewCount;
  const { channelTitle, title, thumbnails } = snippet;

  const hideMenu = useSelector((store) => store.youtube.hideMenu);

  const formatViews = (views) => {
    if (views < 1000) return `${views} ${views === 1 ? "View" : "Views"}`;
    if (views < 1_000_000) return `${(views / 1000).toFixed(3)}K Views`;
    if (views < 1_000_000_000)
      return `${(views / 1_000_000).toFixed(3)}M Views`;
    return `${(views / 1_000_000_000).toFixed(3)}B Views`;
  };

  return (
    <div
      className={`${
        hideMenu ? "md:w-[270px]" : "md:w-[300px]"
      } h-[320px] p-2 m-1 shadow-lg rounded-lg flex flex-col hover:bg-slate-200`}
    >
      {/* ✅ Ensuring Fixed Image Height */}
      <div className="w-full h-[180px] overflow-hidden">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={thumbnails.medium.url}
          alt="video"
        />
      </div>

      {/* ✅ Keeping Text Uniform */}
      <div className="flex flex-col flex-grow justify-between mt-2">
        <h3 className="font-bold mx-1 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mx-1">{channelTitle}</p>
        {viewCount && (
          <p className="text-gray-500 mx-1">{formatViews(viewCount)}</p>
        )}
      </div>
    </div>
  );


}

export default VideoContainer