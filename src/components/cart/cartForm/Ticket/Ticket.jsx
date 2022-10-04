import React from "react";

const Ticket = ({ ticketView }) => {
  const {buyer, id, date, total, items}= ticketView
  const {name, tel, email}=buyer
 
  return (
    <>
      
{name}
{items.map((i, index)=>{
  return(
    <div key={index}>
      <p>{i.tittle}</p>
    </div>
  )
})}
    </>
  );
};

export default Ticket;
