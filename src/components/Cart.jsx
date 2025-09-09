import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { removeFromCart, clearCart } from "../store/cartSlice";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const Cart = () =>{

    const carts = useSelector((state) => state.cart.cart); 
    console.log('carts:',carts);

    const dispatch = useAppDispatch();

    return(
        <>
        <p>Hi Cart page</p>
        <h1>Products in Cart: {carts.length}</h1>
        <Button onClick={()=> dispatch(clearCart())} >Clear Cart</Button>
        
        <Grid container spacing={2}>
        {carts.map(product => (
            <Card key = {product.id}>
                <img src={product.image} alt={product.title} width={100} height={100} />
                <CardContent>
                    <Typography>
                        Title: {product.title}
                    </Typography>
                </CardContent>
                <Button onClick={(id) => dispatch(removeFromCart(product.id))} >
                    Remove
                </Button>
            </Card>
        ))}
        </Grid>
        </>
    )
}

export default Cart;