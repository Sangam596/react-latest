/* eslint-disable react/prop-types */
import { useContext } from "react";
import { REST_CARD_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.jsx";

const RestaurantCard = (props) => {
    const { restData } = props;
      const { loggedInUser, isLoggedIn} = useContext(UserContext);

    return (
      <div data-testid="res-card" className=" w-[280px] h-full bg-gray-200  rounded-lg  hover:bg-gray-300 hover:border-2 border-neutral-600">
        <img
          className="p-1 rounded-lg min-h-60"
          alt="Food Logo"
          src={`${REST_CARD_URL}${restData?.cloudinaryImageId}`}
        ></img>
        <h3 className=" m-1 font-bold ">{restData?.name}</h3>
        <h4 className="m-1">{restData?.cuisines.join(", ")}</h4>
        <h4 className="m-1">{restData?.avgRatingString}</h4>
        <h4 className="m-1">{restData?.slaString}</h4>
        <h4 className="m-1">{restData?.costForTwo}</h4>
        <h4 className="m-1">{loggedInUser}</h4>
        <h4 className="m-1">{isLoggedIn}</h4>
      </div>
    );
}


export default RestaurantCard;

