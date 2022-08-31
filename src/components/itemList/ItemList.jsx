import React from 'react';
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <>
      {products.map((prods)=>{
        return (<Item id={prods.id} tittle={prods.tittle} description={prods.description} price={prods.price}/>)
      })}
    </>
  )
}

export default ItemList