import React, {useState} from 'react';
import ItemCount from './ItemCount';

const ItemCountContainer = ({initialCount, stock}) => {
    const [contador, setContador] = useState(initialCount);
   
  return <ItemCount stock={stock} contador={contador} setContador={setContador}/>
}

export default ItemCountContainer