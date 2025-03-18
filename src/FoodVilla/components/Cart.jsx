import { useSelector } from "react-redux"
import  RestroItems, { EnhancedRestroItems } from "./RestroItems";

const Cart = () => {

  const cartItems = useSelector(store => store.cart.items)

  const EnhancedRestroComponent = EnhancedRestroItems(RestroItems)
  return (
    <div className=" m-auto w-6/12 ">
      <h1 className="font-bold text-3xl text-center ">
        Cart({cartItems.length})
      </h1>
      <div className="items-center ">
        <EnhancedRestroComponent data={cartItems} />
      </div>
    </div>
  );
}

export default Cart