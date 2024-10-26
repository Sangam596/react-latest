import RestaurantCard from "./RestaurantCard";
import {mockData} from "../mockData/mockData"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [fleteredestaurantList, setFleteredRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    try {
        const response = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
          );
          const data = await response.json();
          const restList =
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          setRestaurantList(restList);
          setFleteredRestaurantList(restList);
    } catch (error) {
        setRestaurantList(mockData);
        setFleteredRestaurantList(mockData);
    }
  };

  const filterRestroComponents = () => {
    const filtredRestroComponents = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setFleteredRestaurantList(filtredRestroComponents);
  };

  const searchRestroComponents = () => {
    const filteredRestaurants = restaurantList.filter(
      (restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText) ||
        restaurant?.info?.cuisines.join(", ").includes(searchText)
    );
    setFleteredRestaurantList(filteredRestaurants);
  };

  const handleKeyDown = () => {
    if (event.keyCode == '13') {
      event.preventDefault();
      searchRestroComponents();
    }
  }
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="sub-body">
        <input
          type="text"
          className="search-box"
          placeholder="search restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value.toLowerCase());
            }}
            onKeyDown={handleKeyDown}
        ></input>
        <button onClick={searchRestroComponents}>Search</button>
        <input
          className="button"
          type="button"
          onClick={filterRestroComponents}
          value="Top Rated Restaurants"
        ></input>
      </div>

      <div className="res-container">
        {fleteredestaurantList.map((rest) => (
          <RestaurantCard key={rest.info.id} restData={rest.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
