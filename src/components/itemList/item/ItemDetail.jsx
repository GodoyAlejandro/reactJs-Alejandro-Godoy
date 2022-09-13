import React, {useState} from 'react';
import ItemCountContainer from './itemCount/ItemCountContainer';
import './ItemDetail.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GoToCart from './goToCart/GoToCart';

function ItemDetail({product}) {
  const [contador, setContador] = useState(1);
  const [enableCount, setEnableCount] = useState(false)
  const {id, tittle, price, description, src, stock} = product;

  return (
    <div id={id} className='ItemDetail'>
      <img src={src} alt={tittle} />
      <Card>
          <CardContent>
            <Typography  variant='h2' fontWeight='700' sx={{}} >
              {tittle}
            </Typography>
            
            <Typography variant="h4" sx={{height:'3rem',}}>
             Price: ${price} 
            </Typography>
            <Typography variant="h5" >
            {description}
            </Typography>
          </CardContent>
          <CardActions >
            {enableCount ? <GoToCart contador={contador}/> : <ItemCountContainer stock={stock} contador={contador} setContador={setContador} enableCount={enableCount} setEnableCount={setEnableCount}/> }
          
          </CardActions>
      </Card>
    </div>
  )
}

export default ItemDetail