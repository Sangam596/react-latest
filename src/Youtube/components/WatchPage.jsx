import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import Reccomended from "./Reccomended";
import { useState } from "react";
import LiveChat from "./LiveChat";
import Breadcrumbs from './../../../Breadcrumbs';

const Watch = () => {
  const [searchParam] = useSearchParams();
  const [showLiveChat, SetShowLiveChat] = useState(false);
  const [showVideos, SetShowVideos] = useState(true);

  return (
    <div className="w-full flex flex-col md:flex-row my-20 px-4 md:px-8">
      {/* Left: Video Player & Comments */}
      <Breadcrumbs />

      <div className="md:w-[800px]">
        <iframe
          className="w-full h-56 md:h-[450px] rounded-lg"
          src={`https://www.youtube.com/embed/${searchParam.get(
            "v"
          )}?autoplay=1&mute=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
        <Comments />
      </div>
      <div>
        <div className="flex justify-between mx-8 mb-2">
          <button
            className={`font-bold text-center p-1 bg-black text-white rounded-lg border-4 ${
              showVideos && " rounded-b-0 rounded-lg border-t-red-400"
            }`}
            onClick={() => {
              SetShowLiveChat(!showLiveChat);
              SetShowVideos(!showVideos);
            }}
          >
            Most Popular Videos
          </button>
          <button
            className={`font-bold text-center p-1 bg-green-400 rounded-lg border-4 border-b-0 ${
              showLiveChat && " rounded-b-0 rounded-lg border-red-400"
            }`}
            onClick={() => {
              SetShowLiveChat(!showLiveChat);
              SetShowVideos(!showVideos);
            }}
          >
            Live Chat
          </button>
        </div>
        <div
          className={`md:w-[400px] md:ml-2 mt-4 md:-mt-2 max-h-[70vh] bg-slate-100 shadow-lg ${
            showLiveChat && "rounded-t-lg"
          }`}
        >
          {showLiveChat ? <LiveChat /> : <Reccomended />}
        </div>
      </div>
    </div>
  );
};

export default Watch;
