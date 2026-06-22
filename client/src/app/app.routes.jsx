import Login from "../Features/auth/pages/LoginPage";
import Register from '../Features/auth/pages/RegisterPage'
import { createBrowserRouter } from "react-router";
import Createproducts from "../Features/products/pages/createproducts";
import Protected from "../Features/auth/components/Protected";
import Dashboard from "../Features/products/pages/Dashboard";
import Home from "../Features/products/pages/Home";
import ProductDetail from "../Features/products/pages/ProductDetails";
import SellerProductDetails from "../Features/products/pages/SellerProductDetails";
import AppLayout from "./AppLayout";
import Cart from "../Features/cart/pages/Cart";
import OrderSuccess from "../Features/cart/pages/OrderSuccess";

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
        element:<AppLayout/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:productId",
                element: <ProductDetail />
            },
            {
                path: "/cart",
                element: <Protected> <Cart/></Protected>
            },
              {
                path: "/order-success",
                element: <OrderSuccess/>
            },
            {
                path: "/seller",
                children: [
                    {
                        path: "/seller/create-product",

                        element: <Protected role="seller" >
                            <Createproducts/>
                        </Protected>
                    },
                    {
                        path: "/seller/dashboard",
                        element: <Protected role="seller" >
                            <Dashboard />
                        </Protected>
                    },
                    {
                        path: "/seller/product/:productId",
                        element: <Protected role="seller" >
                            <SellerProductDetails />
                        </Protected>
                    }
                ]
            }
        ]
    }

])