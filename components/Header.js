import { useState } from "react";
import streetFoodLogo from "../images/Street_Food_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const changeBtnName = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={streetFoodLogo} alt="Street Food Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
          <button className="login-btn" onClick={changeBtnName}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
