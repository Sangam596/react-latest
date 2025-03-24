import RestaurantCard from "./RestaurantCard";
import { mockData } from "../utils/mockData/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST_LIST } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredestaurantList, setFilteredestaurantList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData(REST_LIST);
  }, []);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const fetchData = async (REST_LIST) => {
    try {
      const response = await fetch(REST_LIST);
      const data = await response.json();
      const restList =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      restList ? setRestaurantList(restList) : setRestaurantList(mockData);

      restList
        ? setFilteredestaurantList(restList)
        : setFilteredestaurantList(mockData);
    } catch (error) {
      setRestaurantList(mockData);
      setFilteredestaurantList(mockData);
    }
  };

  const toggleFilter = async () =>
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  const filterRestroComponents = () => {
    const filtredRestroComponents = restaurantList.filter(
      (restaurant) => restaurant.info.avgRatingString > 4.5
    );
    isClicked
      ? setFilteredestaurantList(filtredRestroComponents)
      : setFilteredestaurantList(restaurantList);
  };

  const searchRestroComponents = () => {
    const filteredRestaurants = restaurantList.filter(
      (restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText) ||
        restaurant?.info?.cuisines.join(", ").includes(searchText)
    );
    setFilteredestaurantList(filteredRestaurants);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode == "13") {
      event.preventDefault();
      searchRestroComponents();
    }
  };
  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className=" border-gray-100 m-5 justify-self-center">
        <input
          type="text"
          data-testid= "searchInput"
          className="m-1 p-1 border-2 rounded-lg"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value.toLowerCase());
          }}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        <button
          className="bg-gray-400 text-white m-1 p-1 rounded-lg cursor-pointer hover:bg-black"
          onClick={searchRestroComponents}
        >
          Search
        </button>
        <input
          className="bg-gray-400 text-white m-1 p-1 rounded-lg cursor-pointer  hover:bg-black"
          type="button"
          onClickCapture={toggleFilter}
          onClick={filterRestroComponents}
          value="Top Rated Restaurants"
        ></input>
        <label className="items-center">User : </label>
          <input
            data-testid="loggedIn-user-input"
          className="border border-gray-400 px-2 rounded-md"
          value={loggedInUser ?? ""}
          maxLength={25}
          onChange={(e) => setLoggedInUser?.(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap w-full m-2 mx-5 mt-10 justify-center gap-2">
        {filteredestaurantList?.map((rest) => (
          <Link
            to={`/food/restroMenu/${rest?.info?.id}`}
            key={rest?.info?.id}
            restid={rest.info.id}
          >
            <RestaurantCard restData={rest.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
