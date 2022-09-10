import { Button, Paper } from "@material-ui/core";
import Cart from "./Cart";
import IProduct from "../interface/product";


type Props = {
  cartItems: IProduct[];
  addToCart: (clickedItem: IProduct) => void;
  removeFromCart: (id: number) => void;
};

const Main = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: IProduct[]) =>
    items.reduce((acc, item) => acc + item.price * item.price, 0);

  return (
    <Paper>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((i) => (
        <Cart
          key={i.id}
          item={i}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Paper>
  );
};

export default Main;