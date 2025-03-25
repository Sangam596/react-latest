import { useContext, useState } from "react";
import streetFoodLogo from "/street-food-logo.png";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../../Breadcrumbs";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useStatus();
  const { loggedInUser } = useContext(UserContext);
  const changeBtnName = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className="flex justify-between sticky bg-gray-200 shadow-lg m-1">
      <div className="m-2 ">
        <img
          className="w-24 rounded-full"
          src={streetFoodLogo}
          alt="Street Food Logo"
        />
      </div>

      <div className=" flex items-center ">
        <ul className="m-2 p-4 flex font-bold">
          <li className="m-2 p-2"> Status : {isOnline ? "🟢" : "🔴"}</li>
          <li className="m-2 p-2 hover:bg-gray-400">
            <Link to="/food">Home</Link>
          </li>
          <li className="m-2 p-2 hover:bg-gray-400">
            <Link to="/food/about">About us</Link>
          </li>
          <li className="m-2 p-2 hover:bg-gray-400">
            <Link to="/food/contact">Contact us</Link>
          </li>
          <li className="m-2 p-2 hover:bg-gray-400 ">
            <Link to="/food/cart">Cart({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="m-2 p-2 hover:bg-gray-400"
              onClick={changeBtnName}
            >
              {btnName}
            </button>
          </li>

          <span
            data-testid="loggedInUser"
            className="m-2 p-2 bg-black text-white rounded-lg hover:bg-green-400"
          >
            {loggedInUser}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
