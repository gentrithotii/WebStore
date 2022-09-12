import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "@mui/material";
import {CartItem} from "../component/CartItem";
import { getData } from "../Products/Main";
import { Link } from "react-router-dom";

const data = getData();

export function Main() {
    const { cartItems } = useShoppingCart()


    return (
      <>
          <h2>Your Cart</h2>
          <Stack gap={3}>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {
                cartItems.reduce((total, cartItem) => {
                  const item = data.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              }
            </div>
             <Link to="/Checkout">
     <button type="button">
          Checkout
     </button>
 </Link>
          </Stack>


      </>
    )
}