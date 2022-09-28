import { useShoppingCart } from "../context/ShoppingCartContext";
import { Paper, Stack } from "@mui/material";
import { CartItem } from "../component/CartItem";
import { getData } from "../Products/main";
import { homeContainer, styles } from "../style/styles";
import { NavLink } from "react-router-dom";

const data = getData();

export function Main() {
  const { cartItems } = useShoppingCart();

  if(cartItems.length !== 0){
    return (
    <>
    <Paper style={styles.paperContainer}>
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
        <NavLink to="/Checkout">
          <button type="button">Checkout</button>
        </NavLink>
      </Stack>
    
    </Paper>
    </>  
  )
  } 
  else {
    return(
      <>
       <Paper style={homeContainer.paperContainer}>
                <div className="content rounded-border">
                    <h2>The cart Is empty:</h2>
                    <NavLink to="/Products">
          <button><h2>Go back to products </h2></button>
        </NavLink>

                </div>
            </Paper>
      </>
    );
    
  }
}
export default Main;
