import React from 'react';
import ItemCount from './ItemCount';

const ItemCountContainer = ({stock, contador, setContador, enableCount, setEnableCount}) => {
   
  return <ItemCount stock={stock} contador={contador} setContador={setContador} enableCount={enableCount} setEnableCount={setEnableCount}/>
}

export default ItemCountContainer