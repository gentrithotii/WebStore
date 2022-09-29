import {Button, Box } from "@mui/material";
import {styles } from "../style/styles";
import {useParams} from "react-router-dom";
import products from "../Json/products.json";
import IProduct from "../interface/product";
import { useShoppingCart } from "../context/ShoppingCartContext";


const data = products as IProduct[];


export function Main() {

  let {id} = useParams()
    const thisProduct = data.find(product => product.id === Number(id))
    const { increaseCartQuantity } = useShoppingCart();

    return (
      <Box sx={{alignItems: 'center', height: '100vh',background: 'white', display: {xs: 'flex', md: 'flex'}}}>
        <Box sx={{ flexDirection: 'column',background: 'white', color: 'black', width: '100%', justifyContent: 'center', alignItems: 'center', display: {xs: 'block', md: 'flex'}}}>
            <img src={thisProduct?.image} style={styles.img} />
            <h3>{thisProduct?.name}</h3>
            <h3>${thisProduct?.price}</h3>
            <h3>Description.</h3>
            <p className="description">{thisProduct?.description}</p>
            
            <Button onClick={() => increaseCartQuantity(Number(id))} style={styles.button}>
              Add to Cart{" "}
            </Button>
        </Box>
      </Box>
        
    )
}

export default Main;

