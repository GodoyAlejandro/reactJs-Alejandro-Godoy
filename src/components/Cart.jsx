import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = ({cartProp}) => {
    return(
        <>
            <span><ShoppingCartIcon/></span>
            <span>{cartProp}</span>
        </>
    )
}
export default Cart;