import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "@mui/material";
import {CartItem} from "../component/CartItem";
import { getData } from "../Products/Main";
import Cart from "./Cart";
import Header from "../component/Header";
import Footer from "../component/Footer";

const data = getData();

export function CartPage() {
    const { cartItems } = useShoppingCart()


    return (
      <>  
      <Header/>
      <Cart/>
      <Footer/>
      </>
    )
}