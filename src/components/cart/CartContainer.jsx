import React, { useContext, useState } from "react";
import { CartContext } from "../../cartContext/CartContext";
import Cart from './Cart'

import { useEffect } from "react";
import CartEmpty from "./CartEmpty";

function CartContainer() {
  const { cartItem, clear, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cartItem.reduce((acc, tp) => (acc += tp.quantity * tp.price), 0));
    
  }, [cartItem]);
  return (
   <>
   {cartItem.length === 0? <CartEmpty/>: <Cart clear={clear} removeItem={removeItem} total={total} cartItem={cartItem} />}
   
   
   </>
  );
}

export default CartContainer;
