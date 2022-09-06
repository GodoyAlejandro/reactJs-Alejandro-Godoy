import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import promiseProds from '../../../mocks/mockData';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loader, setLoader]= useState(true);
  const {id} = useParams()

  useEffect(()=>{
    promiseProds
    .then((res)=>{
      setProduct(res.find((item) => item.id === id))
    })
    .catch((err)=> console.log(err))
    .finally(()=> setLoader(false))
  }, [id])

  return (
    <div>{loader ? <p>Loading...</p> : <ItemDetail product={product}/> }</div>
  )
}

export default ItemDetailContainer