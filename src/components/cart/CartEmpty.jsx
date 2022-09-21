import React from "react";
import { Button} from "@mui/material";
import {Link} from 'react-router-dom'


function CartEmpty() {
  return (
    <div style={{margin:'1rem'}}>
      <h1>
        your cart is empty, if you want to purchase something for our store
        please go back to the front page and select al least one movie
      </h1>
      <Button variant='contained'>
        <Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link>
      </Button>
    </div>
  );
}

export default CartEmpty;
