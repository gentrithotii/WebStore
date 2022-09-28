import { useShoppingCart } from "../context/ShoppingCartContext";
import { Paper, Stack, Button } from "@mui/material";
import { CartItem } from "../component/CartItem";
import { getData } from "../Products/main";
import { homeContainer, styles } from "../style/styles";
import { NavLink } from "react-router-dom";
import {useParams} from "react-router-dom";
import products from "../Json/products.json";
import IProduct from "../interface/product";

//const data = getData();
const data = products as IProduct[];

export function Main() {

    const {productId} = useParams()
    const thisProduct = data.find(product => product.id === Number(productId))

    console.log(productId);

    
    return (
      <Paper>
      <div style={styles.imageContainer}>
          <img src={thisProduct?.image} style={styles.img} />
        </div>
        <div>
          <h3>{thisProduct?.name}</h3>
          <h3>${thisProduct?.price}</h3>
        </div>
    </Paper>
    )
}

export default Main;
