import { useState } from 'react';
import Header from '../component/Header';
import Page from './Main';
import Footer from '../component/Footer';

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