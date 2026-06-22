import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../Features/auth/state/auth.slice"
import productReducer from '../Features/products/state/product.slice'
import cartReducer from '../Features/cart/state/cart.slice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        cart: cartReducer
    }
})