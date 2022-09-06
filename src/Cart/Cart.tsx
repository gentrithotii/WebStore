import { useState } from 'react'
import Header from './Header'
import Page from './Main'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Checkout from '../Checkout/Checkout'

function Cart() {
    const [count, setCount] = useState(0)
  
    return (
    <>
   <h1>hello world</h1>
   <Link to="/Checkout" className="btn btn-primary">Checkout</Link>
   

    </>
    );
  };

  export default Cart;Checkout;
 