import { getData } from "../Products/main";
import Main from "./Main";
import Header from "../component/Header";
import Footer from "../component/Footer";

const data = getData();

export function DetailsPage() {

    return (
      <>  
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
}