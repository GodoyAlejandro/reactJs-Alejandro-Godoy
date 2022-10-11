import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { genre } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const prodsFilterRef = genre
      ? query(collection(db, "products"), where("genre", "==", genre))
      : collection(db, "products");
    getDocs(prodsFilterRef).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [genre]);
  return (
    <div className="itemListContainer">
      {products.length === 0 ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
