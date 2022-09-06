import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';
import promiseProds from '../../mocks/mockData';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {category} = useParams();

    useEffect(()=>{
      setTimeout(()=>{
        promiseProds
        .then((res)=>{
          if(category){
            setProducts(res.filter((item)=>item.category === category))
          }else{
            setProducts(res)
          }
        })
        .catch((err)=> console.log(err))
      }, 500)
          
      },[category])
  return (
    <div className='itemListContainer'>
      <ItemList products={products} />
      
    </div>
  )
}

export default ItemListContainer