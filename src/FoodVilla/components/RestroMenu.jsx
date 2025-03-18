import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCatogory from "./RestroCatogory";
import { useState } from "react";
const RestroMenu = () => {
  const params = useParams();
  const restroMenu = useRestroMenu(params.restid);
  const [showIndex, setShowIndex] = useState(null);

  const restroName = restroMenu?.cards[0]?.card?.card?.text;
  const filterPath = restroMenu?.cards?.[4]?.groupedCard
    ? restroMenu?.cards?.[4]?.groupedCard
    : restroMenu?.cards?.[5]?.groupedCard;
  // console.log(`filterPath`, filterPath);
  const fileteredItems = filterPath?.cardGroupMap?.REGULAR.cards?.filter(
    (card) =>
      card.card.card["@type"].includes("food.v2.ItemCategory") ||
      card.card.card["@type"].includes("food.v2.NestedItemCategory")
  );
  // console.log(`restroMenu?.cards?`, restroMenu?.cards);
  return (
    <div className="text-center content-evenly">
      <h1 className="font-bold text-2xl m-5 w-7/12">{restroName}</h1>
      {fileteredItems?.map((food, index) => (
        <RestroCatogory
          key={food?.card?.card?.title}
          data={food?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index === showIndex ? null : index);
          }}
        />
      ))}
    </div>
  );
};

export default RestroMenu;
