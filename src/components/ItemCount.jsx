import React from 'react';

const ItemCount = ({contador, stock, disabledBtnAdd, disabledBtnLess, onClickBtnAdd, onClickBtnLess}) => {
  return (
    <div>
        <p>stock disponible: {stock}</p>
        <p>contador: {contador}</p>
        <button disabled={disabledBtnAdd} onClick={()=>onClickBtnAdd()}>add</button>
        <button disabled={disabledBtnLess} onClick={()=>onClickBtnLess()}>less</button>
    </div>
  )
}

export default ItemCount