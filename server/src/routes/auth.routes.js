import express from "express"
import { register, login, googleCallback,getMe } from "../controller/auth.controller.js"
import { validateRegisterUser, validateLoginUser } from "../validator/auth.validator.js"
import { config } from "../config/config.js"
import { authenticateUser } from "../middleware/auth.middleware.js"
const userRoutes = express.Router()
import passport from "passport"

userRoutes.post("/register", validateRegisterUser, register)
userRoutes.post("/login", validateLoginUser, login)
userRoutes.get("/getme", authenticateUser, getMe)
userRoutes.get("/google",
    passport.authenticate("google", { scope: ["profile", "email"] }))
userRoutes.get("/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: config.NODE_ENV == "development" ? "http://localhost:5173/login" : "/login"
    }),
    googleCallback,
)
export default userRoutes

