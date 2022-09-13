import { Button } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'



function GoToCart({contador}) {
  return (
    <div>
        <p>cantidad seleccionada: {contador}</p>
        
        <Button variant='contained'>
            <Link to='/Cart' style={{color:'white', textDecoration:'none'}}>go to cart</Link>
        </Button>
    </div>
  )
}

export default GoToCart