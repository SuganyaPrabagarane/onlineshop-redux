import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchProducts } from "../store/productSlice";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { addToCart } from "../store/cartSlice";

const Products = () =>{

    //First products comes from store.js file, second products comes from productSlice.js under initialState
    const products = useSelector((state) => state.products.products); 
    console.log('Products:',products);

    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(fetchProducts());

    }, [dispatch]) 

    return(
        <>
        <h1>Products: {products.length}</h1>
        <Grid container spacing={2}>
        {products.map(product => (
            <Card key = {product.id}>
                <img src={product.image} alt={product.title} width={100} height={100} />
                <CardContent>
                    <Typography>
                        Title: {product.title}
                        {/* <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Reviews: {product.rating.count}</p> */}
                    </Typography>
                </CardContent>
                <Button onClick={() => dispatch(addToCart(product))} >
                    Add to cart
                </Button>
            </Card>
        ))}
        </Grid>

        </>
    )
}

export default Products;