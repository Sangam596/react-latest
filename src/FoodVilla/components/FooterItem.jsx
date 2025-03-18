/* eslint-disable react/prop-types */
import { useContext , useEffect} from "react";
import UserContext from "../utils/UserContext";

const FooterItem = ({ items, cities }) => {
  const { showCities, setShowCities, setFooterCities } =
    useContext(UserContext);
  
  
useEffect(() => {
  // Scroll only when showCities becomes true
      document
        .getElementById("cities")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    
}, [showCities]);
   return (
     <div>
       {/* Render the regular items list */}
       {items?.map((item, index) => (
         <li key={index}>{item}</li>
       ))}
       {/* If cities exist, render them with a toggle button */}
       {cities && (
         <li>
           <button
             onClick={() => {
               setShowCities(!showCities);
               setFooterCities(cities);
               
             }}
             className="mt-2 border rounded-md text-blue-500 hover:bg-gray-200"
           >
             {cities?.length} Cities {showCities ? "▲" : "▼"}
           </button>
         </li>
       )}
     </div>
   );
};

 
export default FooterItem;
