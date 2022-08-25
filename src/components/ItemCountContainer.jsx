import React, {useState} from 'react';
import ItemCountLayout from './ItemCountLayout';

const ItemCountContainer = () => {
    const initialCount = 1;
    const stock = 5;
    const [contador, setContador] = useState(initialCount);
    const [disabledBtnAdd, setDisabledBtnAdd] = useState(false);
    const [disabledBtnLess, setDisabledBtnLess] = useState(true);
    const onClickBtnAdd = () =>{
      contador >= stock ? setDisabledBtnAdd(true) : setContador(contador+1);
      contador >= initialCount ? setDisabledBtnLess(false) : setDisabledBtnLess(true);
    }
    const onClickBtnLess = () =>{
      contador <= initialCount ? setDisabledBtnLess(true) : setContador(contador-1);
      contador >= initialCount ? setDisabledBtnAdd(false) : setDisabledBtnAdd(true);
    }
  return <ItemCountLayout stock={stock} contador={contador} disabledBtnAdd={disabledBtnAdd} disabledBtnLess={disabledBtnLess} onClickBtnAdd={onClickBtnAdd} onClickBtnLess={onClickBtnLess}/>
}

export default ItemCountContainer