import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./productSlice";
import usersReducer from "./userSlice";
import cartReducer from "./cartSlice";


export const store = configureStore({
    reducer: {
        // this generates the first part of the state eg: state.products
        products: productsReducer,
        users: usersReducer,
        cart: cartReducer,
    },
})