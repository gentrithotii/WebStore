import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import { ListItem } from '@mui/material';
function Home() {
    const [count, setCount] = useState(0)
  
    return (
    <>
      <Header />
      <p>helo world</p>
      <Footer />
    </>
    )
  }

  export default Home