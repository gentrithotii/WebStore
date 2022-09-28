import {Button} from  "@mui/material";
import IProduct from "../interface/product";
import { Wrapper } from "../style/styles"

type Props = {
  item: IProduct;
  handleAddToCart: (clickedItem: IProduct) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;