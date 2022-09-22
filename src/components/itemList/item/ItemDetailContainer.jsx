import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import ItemDetail from "./ItemDetail";
import './ItemDetail.css'
function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db= getFirestore()
    const prodRef= doc(db, 'products', `${id}`)
    getDoc(prodRef).then((querySnapshot)=>{
      const cleanProd= {...querySnapshot.data(), id: querySnapshot.id}
      setProduct(cleanProd)
    })
    
  }, [id]);

  return <div className='itemDetailContainer'>{Object.entries(product).length === 0 ? <Loading /> : <ItemDetail product={product} />}</div>;
}

export default ItemDetailContainer;
