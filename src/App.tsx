import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./confirmationPage/confirmation";

import Checkout from "./Checkout/Checkout";
import { CartPage } from "./Cart/CartPage";
import { DetailsPage } from "./Details/Details";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      
    </ShoppingCartProvider>
  );
}