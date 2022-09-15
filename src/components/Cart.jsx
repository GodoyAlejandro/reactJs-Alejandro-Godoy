import React, { useContext } from "react";
import { cartContext } from "../App";

function Cart() {
  const { cartItem } = useContext(cartContext);
  console.log(cartItem);
  return (
    <div>
      {cartItem.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.tittle}</h1>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
