import React from 'react';
import './ItemListContainer.css';

const Item = ({id, tittle, description, price}) => {
  return (
    <div id={id} className='item'>
      <h1>{tittle}</h1>
      <p>Descripcion: {description}</p>
      <p>precio: {price}</p>
    </div>
  )
}

export default Item