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

    if (genre) {
      const prodsFilterRef = query(
        collection(db, "products"),
        where("genre", "==", genre)
      );
      getDocs(prodsFilterRef).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    } else {
      const productCollectionRef = collection(db, "products");
      getDocs(productCollectionRef).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    }
  }, [genre]);
  return (
    <div className="itemListContainer">
      {products.length === 0 ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
