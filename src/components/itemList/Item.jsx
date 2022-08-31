import React from 'react'

const Item = ({id, tittle, description, price}) => {
  return (
    <div id={id}>
      <h1>{tittle}</h1>
      <p>Descripcion: {description}</p>
      <p>precio: {price}</p>
    </div>
  )
}

export default Item