/* eslint-disable react/prop-types */

const VideoContainer = ({data}) => {
  const { statistics, snippet }  = data;
  const viewCount = statistics?.viewCount;

  const { channelTitle, title, thumbnails } = snippet;

  const formatViews = (views) => {
    if (views < 1000) return `${views} ${views === 1 ? "View" : "Views"}`;
    if (views < 1_000_000) return `${(views / 1000).toFixed(3)}K Views`;
    if (views < 1_000_000_000)
      return `${(views / 1_000_000).toFixed(3)}M Views`;
    return `${(views / 1_000_000_000).toFixed(3)}B Views`;
  };

  return (
    <div className=" md:w-[350px] p-1 m-1 shadow-lg rounded-lg flex flex-col h-full hover:bg-slate-200">
      <img
        className="rounded-lg w-screen "
        src={thumbnails.medium.url}
        alt="video"
      />
      <div className="flex flex-col flex-grow justify-between min-h-[120px]">
        <h3 className="font-bold mx-1 ">{title}</h3>
        <p className="text-gray-600 mx-1">{channelTitle}</p>
        {viewCount && <p className="text-gray-500 mx-1">{formatViews(viewCount)}</p>}
      </div>
    </div>
  );

}

export default VideoContainer