/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestroMenu = (restid) => {
    const [restroMenu, setRestroMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_URL}${restid}`);
      const menu = await response.json();
      setRestroMenu(menu?.data);
    } catch (error) {
      console.log(error.message);
      
    }
  };
  return restroMenu;
}

export default useRestroMenu