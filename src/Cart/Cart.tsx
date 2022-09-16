import { useShoppingCart } from "../context/ShoppingCartContext";
import { Paper, Stack } from "@mui/material";
import { CartItem } from "../component/CartItem";
import { getData } from "../Products/main";
import { Link } from "react-router-dom";
import { homeContainer, styles } from "../style/styles";

const data = getData();

export function Main() {
  const { cartItems } = useShoppingCart();

  if(cartItems.length !== 0){
    return (
    <>
    <Stack gap={3}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="total">
          Total :{" "}$
          {cartItems.reduce((total, cartItem) => {
            const item = data.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
        </div>
        <Link to="/Checkout">
          <button type="button">Checkout</button>
        </Link>
      </Stack>
    
    </>  
  )
  } 
}
export default Main;
