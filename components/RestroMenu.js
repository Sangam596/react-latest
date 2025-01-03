import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  useEffect(() => {
    fetchMenu();
  });
  const [restroMenu, setRestroMenu] = useState(null);
  const params = useParams();
  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_URL}${params.restid}`);
      const menu = await response.json();
      setRestroMenu(menu?.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const restroName = restroMenu?.cards[0]?.card?.card?.text;
  const foodList = restroMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  return (
    <div className="restroMenu">
      <h1>{restroName}</h1>
      {foodList?.map(food => (
     <p key={food?.card?.info?.id}>{ food?.card?.info?.name} - Rs. { food?.card?.info?.price/100 || food?.card?.info?.defaultPrice/100}</p>
      ))}
    </div>
  );
};

export default RestroMenu;
