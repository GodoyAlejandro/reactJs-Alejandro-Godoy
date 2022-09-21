import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../cartContext/CartContext";

const CartWidget = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const { cartItem } = useContext(CartContext);
  useEffect(() => {
    setCartQuantity(cartItem.reduce((acc, item) => (acc += item.quantity), 0));
  }, [cartItem]);

  return (
    <>
      <span>
        <ShoppingCartIcon />
      </span>
      {cartQuantity === 0 ? <span></span> : <span>{cartQuantity}</span>}
    </>
  );
};
export default CartWidget;
