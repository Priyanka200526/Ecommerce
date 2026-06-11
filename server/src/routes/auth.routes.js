import express from "express"
import { register,login} from "../controller/auth.controller.js"
import { validateRegisterUser,validateLoginUser } from "../validator/auth.validator.js"

const userRoutes = express.Router()

userRoutes.post("/register",validateRegisterUser,register)
userRoutes.post("/login",validateLoginUser,login)

export default userRoutes

