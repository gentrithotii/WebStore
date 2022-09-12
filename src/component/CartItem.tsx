import Button from "@material-ui/core/Button";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getData } from "../Products/Main";
import { Stack } from "@mui/material";

type CartItemProps = {
    id: number
    quantity: number
}

const data = getData();

export function CartItem({id, quantity}: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = data.find(i => i.id === id)
    if (item == null) return null;

    return (
        <Stack direction="column" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {item.price}
        </div>
      </div>
      <div> {item.price * quantity}</div>
      <Button
        variant="outlined"
        size="small"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
    )
}