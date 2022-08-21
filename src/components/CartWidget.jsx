import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({cartProp}) => {
    return(
        <>
            <span><ShoppingCartIcon/></span>
            <span>{cartProp}</span>
        </>
    )
}
export default CartWidget;