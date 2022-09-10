import { Button, Paper } from "@material-ui/core";
import IProduct from '../interface/product'

type Props = {
  item: IProduct;
  addToCart: (clickedItem: IProduct) => void;
  removeFromCart: (id: number) => void;
};

const styles = {
  
  paperContainer: {
    height: '100%',
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},
}

const Cart = ({ item, addToCart, removeFromCart }: Props) => {
    return (
      <>
      <Paper style={styles.paperContainer}>
      <div>
          <h3>{item.name}</h3>
          <div className="information">
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.price * item.price).toFixed(2)}</p>
          </div>
          <div className="buttons">
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </Button>
            <p>{item.price}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </div>
        </div>
        <img src={item.image} alt={item.name} />
      </Paper>
      </>
    )};

  export default Cart;

