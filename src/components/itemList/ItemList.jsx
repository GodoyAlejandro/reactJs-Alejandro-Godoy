import React from "react";
import Item from "./item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((prods, index) => {
        return <Item key={index} prods={prods} />;
      })}
    </>
  );
};

export default ItemList;
