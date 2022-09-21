import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addItem = (item) => {
    const isInCart = cartItem.find((prod) => prod.id === item.id);
    if (isInCart) {
      const carritoActualizado = cartItem.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCartItem(carritoActualizado);
    } else {
      setCartItem([...cartItem, item]);
    }
  };
  const removeItem = (id) => {
    setCartItem(cartItem.filter((rItem) => rItem.id !== id));
  };
  const clear = () => {
    setCartItem([]);
  };

  return (
    <CartContext.Provider value={{ cartItem, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
