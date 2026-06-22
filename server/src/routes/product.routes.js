import express from "express"
import { createproduct,getSellerProducts,getAllProducts, getProductDetails,addProductVariant } from "../controller/product.controller.js"
import { authenticateSeller } from "../middleware/auth.middleware.js"
import multer from 'multer';
import { createProductValidator } from "../validator/product.validator.js";


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
})


const productRouter = express.Router();

productRouter.post("/", authenticateSeller, upload.array('images', 7), createProductValidator, createproduct)
productRouter.get("/seller", authenticateSeller, getSellerProducts)
productRouter.get("/",getAllProducts)
productRouter.get("/detail/:id", getProductDetails)
productRouter.post("/:productId/variants", authenticateSeller, upload.array('images', 7), addProductVariant)
export default productRouter