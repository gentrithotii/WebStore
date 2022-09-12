import Grid from "@material-ui/core/Grid";
import products from "../json/products.json";
import IProduct from "../interface/product";
import { styles } from "../style/styles";
import { Product } from "../component/Product";

const data = products as IProduct[];

export function getData() {
  return data;
}

export default function Main() {

  return (
    <>
    <Grid container spacing={0}>
      <div style={styles.freshFruits}>
        <h2 style={styles.headerContent}>Fresh Fruits</h2>
      </div>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4} md={3} style={styles.product}>
              <Product {...item}/>
            </Grid>
          ))}
        </Grid>
     
    </>
  );
}

 
