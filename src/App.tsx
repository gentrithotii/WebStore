import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />      
      </Routes>
    <Footer/>
    </ShoppingCartProvider>
  );
}
