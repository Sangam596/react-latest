/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { REST_CARD_URL } from "../utils/constants";
import { addItem, clearCart } from "../utils/cartSlice";
const RestroItems = (props) => {
  const dispatch = useDispatch();
  const handleDispatch = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {/* Map over the data array if it exists */}
      {props?.data?.length > 0 &&
        props.data.map((item, index) => (
          <div
            data-testid="food-items"
            key={index}
            className="flex flex-wrap  bg-gray-100 my-4 shadow-lg hover:bg-gray-100 "
          >
            <div className="w-9/12 m-3">
              <h1 className="text-left font-bold">
                {item?.card?.info?.name || "No Name"} - ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h1>
              <p className="p-2 text-xs text-left">
                {item?.card?.info?.description || "No Description"}
              </p>
            </div>
            <div className="w-2/12 m-2 relative">
              {/* Button */}
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 bg-black text-white rounded-md  shadow-md hover:bg-gray-600  cursor-pointer"
                onClick={() => handleDispatch(item)}
              >
                Add +
              </button>

              {/* Image */}
              <img
                src={REST_CARD_URL + item?.card?.info?.imageId}
                className="rounded-lg w-full object-cover h-32"
                alt="Food Item"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export const EnhancedRestroItems = (RestroItems) => {
  const dispatch = useDispatch();
  const clearCartDispatchHandler = () => {
    dispatch(clearCart());
  };
  return (props) => {
    return (
      <div>
        <button
          className=" bg-black text-white rounded-lg  shadow-lg hover:bg-slate-200"
          onClick={clearCartDispatchHandler}
        >
          {props?.data?.length > 0 && " Clear Cart ⛔"}
        </button>
        <RestroItems {...props} />
      </div>
    );
  };
};

export default RestroItems;
