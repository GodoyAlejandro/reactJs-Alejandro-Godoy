import React, { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";
import Cart from "./Cart";
import { useEffect } from "react";
import CartEmpty from "./CartEmpty";
import { Container } from "@mui/material";

function CartContainer() {
  const { cartItem, clear, removeItem, total, handleSetTotal } =
    useContext(CartContext);

  useEffect(() => {
    handleSetTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItem]);
  return (
    <Container sx={{height:'auto'}}>
      {cartItem.length === 0 ? (
        <CartEmpty />
      ) : (
        <Cart
          clear={clear}
          removeItem={removeItem}
          total={total}
          cartItem={cartItem}
        />
      )}
    </Container>
  );
}

export default CartContainer;
