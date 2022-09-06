import React from 'react';
import '../ItemListContainer.css';
import { useNavigate } from 'react-router-dom';

const Item = ({prods}) => {
  const {id, tittle, description, price }= prods;
  const navigate = useNavigate();
  return (
    <div key={id} className='item'>
      <h1>{tittle}</h1>
      <p>Descripcion: {description}</p>
      <p>precio: {price}</p>
      <button onClick={()=>{navigate(`/product/${id}`)}}>ver mas</button>
    </div>
  )
}

export default Item