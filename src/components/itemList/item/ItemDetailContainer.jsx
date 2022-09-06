import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import promiseProds from '../../../mocks/mockData';
import Loading from '../../Loading';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [load, setLoad]= useState(true);
  const {id} = useParams()

  useEffect(()=>{
    setLoad(true)
    setTimeout(()=>{
      promiseProds
      .then((res)=>{
        setProduct(res.find((item) => item.id === id))
        setLoad(false)
      })
      .catch((err)=> console.log(err))
    }, 1500)
  }, [id])

  return (
    <div >{load ? <Loading/> : <ItemDetail product={product}/> }</div>
  )
}

export default ItemDetailContainer