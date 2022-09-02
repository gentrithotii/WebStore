import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import Page from './Main'
import Footer from './Footer'

function Cart() {
    const [count, setCount] = useState(0)
  
    return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
    );
  };

  export default Cart;