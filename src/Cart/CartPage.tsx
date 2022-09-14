import { getData } from "../Products/main";
import Cart from "./Cart";
import Header from "../component/Header";
import Footer from "../component/Footer";

const data = getData();

export function CartPage() {

    return (
      <>  
      <Header/>
      <Cart/>
      <Footer/>
      </>
    )
}