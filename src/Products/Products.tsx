import { useState } from "react";
import Header from "./Header";
import Page from "./Main";
import Footer from "./Footer";

function Products() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}

export default Products;
