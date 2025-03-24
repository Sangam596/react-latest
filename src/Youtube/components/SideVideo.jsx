const SideVideo = ({ data }) => {
  const { snippet } = data;
  const { title, thumbnails } = snippet;

  return (
    <div className="md:w-full p-2 shadow-lg rounded-lg flex flex-col hover:bg-slate-200">
      <div className="flex">
        <img
          className="rounded-lg h-32 object-cover p-1"
          src={thumbnails?.default?.url}
          alt="video"
        />
        <div className="flex flex-col flex-grow m-1">
          <h3 className="font-bold text-sm">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SideVideo;
