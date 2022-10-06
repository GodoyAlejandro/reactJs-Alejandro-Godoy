import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const localStorageItems = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cartItem, setCartItem] = useState(localStorageItems);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  const addItem = (item) => {
    const isInCart = cartItem.find((prod) => prod.id === item.id);
    if (isInCart) {
      const carritoActualizado = cartItem.map((prod) => {
        if (prod.id === item.id) {
          return (prod.quantity + item.quantity) >= item.stock
            ? { ...prod, quantity: item.stock }
            : { ...prod, quantity: prod.quantity + item.quantity };
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
    <CartContext.Provider
      value={{
        cartItem,
        addItem,
        removeItem,
        clear,
        total,
        setTotal,
        setCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
