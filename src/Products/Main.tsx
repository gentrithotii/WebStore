import React from "react";
import Grid from "@material-ui/core/Grid";
import data from "../json/products.json";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IProduct from "../interface/product";


const styles = {
  
    paperContainer: {
      height: '100%',
      width: '100%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
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
    }

  };

export default class Main extends React.Component{
  render(){
  const handleAddToCart = (clickedItem: IProduct) => null;

  return (
    <>
    <Paper style={styles.paperContainer}>
      <Grid container spacing={0}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={4} md={3} style={styles.product}>
              <div style={styles.imageContainer}>
              <img src={item.image} style={styles.img}/>
              </div>
               
              <div>
                <h3>{item.name}</h3>
                <h3>${item.price}</h3>
              </div>
              <Button
                onClick={() => handleAddToCart(item)}
                style={styles.button}
              >
                Add to Cart{" "}
              </Button>
            </Grid>
          ))}
        </Grid>
    </Paper>  
    </>
  );
}
}
