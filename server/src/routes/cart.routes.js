import express from 'express';
import {authenticateUser} from '../middleware/auth.middleware.js'
import { validateAddToCart,validateIncrementCartItemQuantity } from '../validator/cart.validator.js';
import { addToCart,getCart,incrementCartItemQuantity,verifyOrderController,createOrderController } from '../controller/cart.controller.js';


const CartRoutes = express.Router();

CartRoutes.post("/add/:productId/:variantId", authenticateUser, validateAddToCart, addToCart)
CartRoutes.get('/', authenticateUser, getCart)
CartRoutes.patch("/quantity/increment/:productId/:variantId", authenticateUser, validateIncrementCartItemQuantity, incrementCartItemQuantity)
CartRoutes.post("/payment/create/order", authenticateUser, createOrderController)
CartRoutes.post("/payment/verify/order", authenticateUser, verifyOrderController)

export default CartRoutes
