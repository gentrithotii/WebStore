import Button from "@material-ui/core/Button";
import { Paper } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getData } from "../Products/main";
import { styles, cartContainer } from "../style/styles"
import {
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";

type CartItemProps = {
    id: number
    quantity: number
}

const data = getData();

export function CartItem({id, quantity}: CartItemProps) {
    const { removeFromCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
    const item = data.find(i => i.id === id)
    if (item == null) return null;

    return (
      <>
         <Paper style={cartContainer.paperContainer}>
        <div className="flex-container">
          <div>
              <img className="cart-img" src={item.image}/>
          </div>
          <div className="flex-container1">
              <div>
                {item.name}{" "}
              </div>
              <div> ${item.price} </div>
              <div className="flex-container">
                <div className="buttons">
                  <Button
                    size="small"

                    onClick={() => decreaseCartQuantity(item.id)}
                  >
                    -
                  </Button>
                </div>
                <div>
                  <p>{quantity}</p>
                </div>
                <div className="buttons">
                <Button
                  size="small"
                  onClick={() => increaseCartQuantity(item.id)}
                >
                  +
                </Button>
                </div>
              </div>
         
              <div>Total price: ${item.price * quantity} </div>
          </div>
              
          </div>    
      </Paper>
      </>
    )
}