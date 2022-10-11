import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useFormik } from "formik";
import { DateTime } from "luxon";
import React, { useContext, useState, useEffect } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../cartContext/CartContext";
import Loading from "../../Loading";
import Form from "./Form/Form";
import Ticket from "./Ticket/Ticket";

const CartFormContainer = () => {
  const [confirmBuy, setConfirmBuy] = useState(false);
  const [ticketView, setTicketView] = useState({});
  const { cartItem, total, setCartItem, setTotal } = useContext(CartContext);

  useEffect(()=>{
    setTotal(cartItem.reduce((acc, tp) => (acc += tp.quantity * tp.price), 0));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const yupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "the name is too short")
      .max(
        747,
        "Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr. is that you?"
      )
      .required("please enter your name"),
    tel: Yup.string()
      .min(10, "the phone number you entered is too short")
      .required("please enter your phone number")
      .matches(
        /^(?:(?:00)?549?)?0?(?:11|15|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
        "invalid phone number"
      ),
    email: Yup.string()
      .email("put a correct email")
      .required("please put your contact email"),
  });

  const uploadToFirestore = (ticket) => {
    const db = getFirestore();
    const ordersCollectionRef = collection(db, "orders");
    addDoc(ordersCollectionRef, ticket).then(({ id }) =>
      setTicketView({ ...ticket, id: id })
    );
  };
  const createTicket = (values) => {
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
      buyer: values,
      items: items,
      date: dt,
      total: total,
    };
    uploadToFirestore(ticket);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      email: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      createTicket(values);
      setConfirmBuy(true);
      setCartItem([]);
    },
  });

  return (
    <>
      {!confirmBuy ? (
        <Form formik={formik} />
      ) : Object.keys(ticketView).length === 0 ? (
        <Loading />
      ) : (
        <Ticket ticketView={ticketView} />
      )}
    </>
  );
};

export default CartFormContainer;
