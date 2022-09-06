import React from 'react';
import Item from './item/Item'

const ItemList = ({products}) => {
  return (
    <>
      {products.map((prods)=>{
        return (<Item key={prods.id} prods={prods}/>)
      })}
    </>
  )
}

export default ItemList