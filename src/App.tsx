import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Route, Routes } from "react-router-dom";

import Checkout from "./Checkout/Checkout";
import { CartPage } from "./Cart/CartPage";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </ShoppingCartProvider>
  );
}