import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import MainContainer from "./MainContainer";
import Reccomended from "./Reccomended";

const Watch = () => {
  const [searchParam] = useSearchParams();

  return (
    <div className="w-full flex flex-col md:flex-row my-20 px-4 md:px-8">
      {/* Left: Video Player & Comments */}
      <div className="w-[900px]">
        <iframe
          className="w-full h-56 md:h-[500px] rounded-lg"
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

      {/* Right: Recommended Videos */}
      <div className="w-[350px] md:ml-2 mt-4 md:mt-0 overflow-y-auto max-h-[84vh]">
        <Reccomended id={searchParam.get("v")} />
      </div>
    </div>
  );
};

export default Watch;
