import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../cartContext/CartContext";
import { DateTime } from "luxon";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartFormContainer = () => {
  const { cartItem, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [buy, setBuy] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    const items = cartItem.map((i) => {
      return {
        id: i.id,
        tittle: i.tittle,
        price: i.price,
        quantity: i.quantity,
      };
    });
    let ticket = {
      buyer: { name: name, tel: tel, email: email },
      items: items,
      date: dt,
      total: total,
    };
    console.log(ticket);
    const db = getFirestore();
    const ordersCollectionRef = collection(db, "orders");
    addDoc(ordersCollectionRef, ticket).then(({ id }) =>
      setBuy(id)
    );
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="set your name"
        />
        <input
          type="number"
          value={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
          placeholder="set your phone number"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="set your email"
        />
        <Button type="submit">send</Button>
      </form>
      {buy.length === 0 ? <p></p> : <p>id de compra: {buy}</p>}
    </div>
  );
};

export default CartFormContainer;
