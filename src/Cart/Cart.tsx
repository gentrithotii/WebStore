import { useShoppingCart } from "../context/ShoppingCartContext";
import { Paper, Stack } from "@mui/material";
import { CartItem } from "../component/CartItem";
import { getData } from "../Products/main";
import { Link } from "react-router-dom";
import { homeContainer } from "../style/styles";

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
        <div className="ms-auto fw-bold fs-5">
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
  else {
    return(
      <>
       <Paper style={homeContainer.paperContainer}>
                <div className="content rounded-border">
                    <h2>The cart Is empty:</h2>
                    <Link to="/Products">
          <button><h2>Go back to products </h2></button>
        </Link>

                </div>
            </Paper>
      </>
    );
    
  }
}
export default Main;
