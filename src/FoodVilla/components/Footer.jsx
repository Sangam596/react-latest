import { useEffect, useState } from "react";
import { FOOTER_DATA } from "../utils/constants";
import FooterItem from "./FooterItem";
import  streetFoodLogo  from '/street-food-logo.png';

const Footer = () => {
  const [footerItems, setFooterItems] = useState(null);

  useEffect(() => {
    setFooterItems(FOOTER_DATA);
  }, []);
  return (
    <div className="sticky mb-0 bg-gray-100 mx-4 mt-20 rounded-t-3xl flex flex-wrap justify-around">
      <div>
        <img
          className="w-40 m-10 rounded-s-2xl"
          src={streetFoodLogo}
          alt="Street Food Logo"
        />
      </div>
      <div className="grid  place-items-baseline lg:grid-cols-4 ">
        {footerItems?.map((item) => {
          return (
            <div className="m-10" key={item.title}>
              <h1 className="font-bold my-1">{item.title}</h1>
              <ul>
                <FooterItem
                  title={item.title}
                  items={item.item}
                  cities={item?.cities}
                />
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
