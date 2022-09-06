import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const ItemCount = ({contador, stock, setContador}) => {
  const sumar = () =>{
    if(contador<stock){
      setContador(contador+1)
    }
  }
  const restar = () =>{
    if(contador>1){
      setContador(contador-1)
    }
  }
  return (
    <div>
        <Typography variant='h6'>stock disponible: {stock}</Typography>
      <Fab color="primary" aria-label="add" onClick={()=>sumar()}>
        <AddIcon/>
      </Fab>
      <Typography variant='p' sx={{margin:'1rem'}}>
        {contador}
      </Typography>
      <Fab color="secondary" aria-label="add" onClick={()=>{restar()}}>
        <RemoveIcon/>
      </Fab>
      <CardActions>
        <Button variant='contained'>add to cart</Button>
      </CardActions>
    </div>
  )
}

export default ItemCount