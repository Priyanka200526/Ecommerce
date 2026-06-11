import express from "express"
import morgan from "morgan";
import userRoutes from "./routes/auth.routes.js";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    methods: [ "GET", "POST", "PUT", "DELETE" ],
    credentials: true
}))

app.use("/api/auth",userRoutes)



export default app;