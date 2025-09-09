import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    // this generates the second part of the state eg: state.products.products
    products: [],
}

const api = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk('products/products', async () => {
    const response = await axios.get(api);
    return response.data;
})


const productSlice = createSlice({ // Slice means section here
    name: "products",
    initialState,
    reducers: {}, // handel internally
    extraReducers(builder) {  // handel external resources like API
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            });
    },
})

export default productSlice.reducer;