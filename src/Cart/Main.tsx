import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "@mui/material";
import {CartItem} from "../component/CartItem";
import { getData } from "../Products/Main";
import {cartContainer, styles} from "../style/styles";
import {Paper} from "@material-ui/core"

const data = getData();

export function Main() {
    const { cartItems } = useShoppingCart()
    return (
      <>
         <Stack className="total" gap={3}>
                  {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                  ))}
                    Total:{" "}$
                  
                    {
                      cartItems.reduce((total, cartItem) => {
                        const item = data.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                      }, 0)
                    }
          </Stack>   
      </>
    )
}