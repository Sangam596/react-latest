/* eslint-disable react/prop-types */

const SideVideo = ({ data }) => {
  const { snippet } = data;

  const { title, thumbnails } = snippet;
  console.log(`thumbnails`, thumbnails);


  return (
    <div className=" md:w-[300px] p-1 shadow-lg rounded-lg flex flex-col h-[250px] hover:bg-slate-200">
      <img
        className="rounded-lg w-screen h-[150px]"
        src={thumbnails.default.url}
        alt="video"
      />
      <div className="flex flex-col flex-grow justify-between min-h-[120px]">
        <h3 className="font-bold mx-1 ">{title}</h3>
       
      </div>
    </div>
  );
};

export default SideVideo;