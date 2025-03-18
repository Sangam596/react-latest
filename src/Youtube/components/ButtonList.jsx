/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import Button from "./Botton";
import { buttonList } from "../utils/constants";

const ButtonList = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [currentBtn, setCurrentBtn] = useState(0);

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
      e.preventDefault();
      scrollRef.current.scrollBy({ left: e.deltaY * 2, behavior: "smooth" });
      requestAnimationFrame(checkScroll);
    }
  };

  
  useEffect(() => {
    if (scrollRef.current) {
      checkScroll();
      scrollRef.current.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

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
        {buttonList.en.map((item, i) => (
          <Button
            key={item.name}
            name={item.name}
            isActive={currentBtn === i}
            setCurrentBtn={() => setCurrentBtn(i)}
          />
        ))}
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
