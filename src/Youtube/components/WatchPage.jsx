import { useSearchParams } from 'react-router-dom'

const Watch = () => {
  const [searchParam] = useSearchParams()
  return (
    <iframe
      className=' md:w-[750px] h-56 md:h-96 md:my-2 md:mx-8 p-1 md:p-2 rounded-2xl'
      src={
        "https://www.youtube.com/embed/" + searchParam.get("v") + "?autoplay=1&mute=0"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen={true}
    ></iframe>
    
  );
}

export default Watch