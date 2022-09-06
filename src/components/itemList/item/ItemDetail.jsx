import React from 'react';
import ItemCountContainer from '../../ItemCountContainer'

function ItemDetail({product}) {
    const {id, tittle, price, description} = product;
  return (
    <div id={id} >
        <h1>{tittle}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <ItemCountContainer/>
    </div>
  )
}

export default ItemDetail