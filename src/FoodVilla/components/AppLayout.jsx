import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";
import ListCities from "./ListCities";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../../../store";
import Breadcrumbs from "../../../Breadcrumbs";

const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState("Sangam");
  const [showCities, setShowCities] = useState(false);

  const [footerCities, setFooterCities] = useState(null);

  return (
    <div className="m-0 p-0">
      <span className="fixed top-0 w-fit shadow-md z-50 ">
        <Breadcrumbs className="text-sm hover:bg-gray-200" />
      </span>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            loggedInUser,
            setLoggedInUser,
            showCities,
            setShowCities,
            footerCities,
            setFooterCities,
          }} // we can pass extra parameters
        >
          <Header />
          <Outlet />
          <Footer />
          <ListCities />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default AppLayout;
