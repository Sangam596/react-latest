import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ListCities = () => {

  const { showCities, footerCities } = useContext(UserContext);
  

  return (
    showCities && (
      <div id="cities" className="bg-gray-100 p-2 mx-44 mt-5  rounded-2xl scroll-m-2">
        <h2 className="lg: text-2xl font-bold m-4">
          Cities We Deliver To :
        </h2>
        <div className="grid xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1">
          {footerCities?.map((city, index) => (
            <div
              className="pl-2 sm:p-0 bg-white shadow rounded-lg text-center cursor-pointer hover:bg-gray-200 "
              key={index}
            >
              {city}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ListCities;
