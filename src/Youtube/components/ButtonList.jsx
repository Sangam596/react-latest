/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import Button from "./Botton";
import { YOUTUBE_CATAGORY_API } from "../utils/constants";
import ButtonShimmer from "./ButtonShimmer";
import { useDispatch } from "react-redux";
import { setVideoCatgory } from "../utils/youtubeSlice";
// import { buttonList } from "../utils/constants";

const ButtonList = () => {
  const scrollRef = useRef(null);
  const [buttonList, setButtonList] = useState([]);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [currentBtn, setCurrentBtn] = useState(0);

  const dispatch = useDispatch();

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScroll, 300); // Ensure update after scroll
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: e.deltaY * 2, behavior: "smooth" });
      requestAnimationFrame(checkScroll);
    }
  };

  
  useEffect(() => {
    if (scrollRef.current) {
      checkScroll();
      scrollRef.current.addEventListener("scroll", checkScroll);
    }
    getCats();

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const getCats = async () => {
    const response = await fetch(YOUTUBE_CATAGORY_API);
    let data = await response.json();
    data = data.items.map(item => {
      return {id:item?.id, title:item?.snippet?.title}
    })
    setButtonList(data)

  }

  return (
    <div className="relative bg-white shadow-md py-2 overflow-hidden">
      {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md bg-white"
        >
          {"<"}
        </button>
      )}

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth mx-12 [&::-webkit-scrollbar]:hidden scrollbar-hide"
      >
        {buttonList.length === 0 ? (
          <ButtonShimmer />
        ) : (
          buttonList.map((item, i) => (
            <Button
              key={item.id}
              name={item.title}
              isActive={currentBtn === i}
              setCurrentBtn={() => setCurrentBtn(i)}
              setCatgoryId={() =>{ dispatch(setVideoCatgory(item.id))}}
            />
          ))
        )}
      </div>

      {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md bg-white"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default ButtonList;
