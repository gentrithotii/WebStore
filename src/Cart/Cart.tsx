import { useState } from 'react'
import Checkout from '../Checkout/Checkout';
import { Link } from 'react-router-dom';

function Cart() {
    const [count, setCount] = useState(0)
  
    return (
    <>
   <h1>hello world</h1>
  
   <Link to="/Checkout">Checkout</Link> 
 
   
  
   

    </>
    );
  };

  export default Cart;Checkout;