import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/products";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./Cart/Cart"

export default function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />  
        <Route path="/cart" element={<CartPage />} />     
      </Routes>
    </ShoppingCartProvider>
  );
}
