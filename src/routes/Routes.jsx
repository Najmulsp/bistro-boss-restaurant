import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import PrivetRoute from "../pages/authentication/PrivetRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/Cart";
import Alluser from "../pages/dashboard/admin/Alluser";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <PrivetRoute><Menu></Menu></PrivetRoute>
        },
        {
            path: "/order/:category",
            element: <Order></Order>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children:[
            {
                path: 'cart',
                element: <PrivetRoute><Cart></Cart></PrivetRoute>
            },

            // admin
            {
                path: 'users',
                element: <Alluser></Alluser>
            }
        ]
    }
  ]);