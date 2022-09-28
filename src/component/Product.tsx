import { useShoppingCart } from "../context/ShoppingCartContext";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  paperContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: "250px",
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
    alignItems: "center",
  },
  headerContent: {
    opacity: 0.5,
    marginTop: "80px",
    color: "black",
    fontSize: "2rem",
  },
};

type ProductProps = {
  id: number;
  name: string;
  price: number;
  origin: string;
  image: string;
  amount: number;
};

export function Product({
  id,
  name,
  price,
  origin,
  image,
  amount,
}: ProductProps) {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <>
      <Paper>
        <Link to={`/details/${id}`}>
          <div style={styles.imageContainer}>
            <img src={image} style={styles.img} />
          </div>
        </Link>
        <div>
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <Button onClick={() => increaseCartQuantity(id)} style={styles.button}>
          Add to Cart{" "}
        </Button>
      </Paper>
    </>
  );
}
