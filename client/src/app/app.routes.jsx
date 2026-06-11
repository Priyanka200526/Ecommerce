import Login from "../Features/pages/LoginPage";
import Register from "../Features/pages/RegisterPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path:"/",
        element:<h1>hello</h1>
    }
])