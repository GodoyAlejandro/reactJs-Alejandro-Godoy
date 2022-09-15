import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({
  stock,
  contador,
  setContador,
  enableCount,
  setEnableCount,
  addToCart,
}) => {
  return (
    <ItemCount
      stock={stock}
      contador={contador}
      setContador={setContador}
      enableCount={enableCount}
      setEnableCount={setEnableCount}
      addToCart={addToCart}
    />
  );
};

export default ItemCountContainer;
