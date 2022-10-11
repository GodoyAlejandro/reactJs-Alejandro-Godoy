import React, { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";
import Cart from "./Cart";
import { useEffect } from "react";
import CartEmpty from "./CartEmpty";
import { Container } from "@mui/material";

function CartContainer() {
  const { cartItem, clear, removeItem, total, setTotal } =
    useContext(CartContext);

  useEffect(() => {
    setTotal(cartItem.reduce((acc, tp) => (acc += tp.quantity * tp.price), 0));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItem]);
  return (
    <Container sx={{ height: "100vh" }}>
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
