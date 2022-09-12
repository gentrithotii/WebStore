import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </ShoppingCartProvider>
  );
}