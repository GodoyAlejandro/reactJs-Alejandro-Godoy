import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';
import promiseProds from '../../mocks/mockData';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {genre} = useParams();
    const [load, setLoad]= useState(true)

    useEffect(()=>{
      setLoad(true)
      setTimeout(()=>{
        promiseProds
        .then((res)=>{
          if(genre){
            setProducts(res.filter((item)=>item.genre === genre));
            setLoad(false)
          }else{
            setProducts(res);
            setLoad(false)
          }
        })
        .catch((err)=> console.log(err))
      }, 1500)
          
      },[genre])
  return (
    <div className='itemListContainer'>{load ? <Loading/> : <ItemList products={products}/> }
      {/* <ItemList products={products} /> */}
    </div>
  )
}

export default ItemListContainer