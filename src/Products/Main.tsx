import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import data from "../json/products.json";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "1rem",
      height: "100%",
    },
    img: {
      maxHeight: 250,
      borderRadius: "0 0 20px 20px",
      objectFit: "cover",
    },
    button: {
      borderRadius: "0 0 20px 20px",
    },
    product: {
      border: "1px solid #ccc",
      borderRadius: "0 0 20px 20px",
    },
  })
);
function Main() {
  const [count, setCount] = useState(0);
  const handleAddToCart = (clickedItem: Product) => null;
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={3} className={classes.product}>
              <img src={item.image} className={classes.img} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
              </div>
              <Button
                onClick={() => handleAddToCart(item)}
                className={classes.button}
              >
                Add to Cart{" "}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Main;
