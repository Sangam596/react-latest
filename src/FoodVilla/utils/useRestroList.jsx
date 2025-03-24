import { useEffect, useState } from 'react';
import { REST_LIST } from './constants';

const useRestroList = () => {
  const [restaurantList, setRestaurantList ] = useState([]);

    useEffect(()=>{
        fetchData(REST_LIST);
    },[]);

    const fetchData = async(url) =>{
       try {
        const response = await fetch(url);
        const data = await response.json();
        const restList =
            data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
              setRestaurantList(restList);
       } catch (error) {
       } 
    }
    return restaurantList;
}

export default useRestroList;