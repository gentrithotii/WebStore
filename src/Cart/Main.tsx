import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "@mui/material";
import {CartItem} from "../component/CartItem";
import { getData } from "../Products/Main";

const data = getData();

export function Main() {
    const { cartItems } = useShoppingCart()


    return (
      <>

      </>
    )
}