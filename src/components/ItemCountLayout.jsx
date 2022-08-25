import React from 'react';

const ItemCountLayout = ({contador, stock, disabledBtnAdd, disabledBtnLess, onClickBtnAdd, onClickBtnLess}) => {
  return (
    <div>
        <p>stock disponible: {stock}</p>
        <p>contador: {contador}</p>
        <button disabled={disabledBtnAdd} onClick={()=>onClickBtnAdd()}>add</button>
        <button disabled={disabledBtnLess} onClick={()=>onClickBtnLess()}>less</button>
    </div>
  )
}

export default ItemCountLayout