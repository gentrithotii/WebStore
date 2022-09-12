import { useShoppingCart } from "../context/ShoppingCartContext";
import Button from "@material-ui/core/Button";
import { Paper } from "@mui/material";

const styles = {
  
  paperContainer: {
    height: '100%',
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
},
  img: {
    backgroundSize: "cover",
    width: "90%",
    heigh: "100%",
    borderRadius: "0 0 20px 20px",
  },
  button: {
    borderRadius: "0 0 20px 20px",
  },
  product: {
    height: "auto",
    alignItems: "center",
    justtifyContent: "center",
    maxwidth: "100%",
    border: "1px solid #ccc",
    borderRadius: "0 0 20px 20px",
  },
  imageContainer: {
    height: "auto",
  }, 
  freshFruits: {
      backgroundColor: "#F0EAEA",
      height: "8rem",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
  }, 
  headerContent: {
    opacity: 0.5,
    marginTop: "80px",
    color: "black",
    fontSize: "2rem",
  }
}

type ProductProps = {
  id: number;
  name: string;
  price: number;
  origin: string;
  image: string;
  amount: number;
}

export function Product({ id, name, price, origin, image, amount }: ProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <>
    <Paper>
      <div style={styles.imageContainer}>
          <img src={image} style={styles.img} />
        </div>
        <div>
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <Button
          onClick={() => increaseCartQuantity(id)}
          style={styles.button}
        >
          Add to Cart{" "}
        </Button>
    </Paper>
      
    </>
  )
}