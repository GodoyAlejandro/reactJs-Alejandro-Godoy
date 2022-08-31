import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        let promiseProds = new Promise ((res)=>{
            setTimeout(()=>{
                res([{id: 1, tittle: 'Rice', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe nihil sed!', price: 200},
                {id: 2, tittle: 'Chicken', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus atque ratione.', price: 500},
                {id: 3, tittle: 'Eggs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, assumenda in. Amet!', price:700},
                {id: 4, tittle: 'Milk', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga fugit quod.', price: 600},
                {id: 5, tittle: 'Cereal', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga debitis ducimus?', price: 350},
                {id: 6, tittle: 'flour', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magni voluptatem reprehenderit?', price: 900}])
            })
          }, 2000)
          promiseProds.then((res)=>{
            setProducts(res)
          })
    },[])
  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer