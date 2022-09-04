import { useState } from 'react';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';

function Home() {
    const [count, setCount] = useState(0)
  
    return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
    )
  }

  export default Home