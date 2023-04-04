import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Componants/Shop/shop";
import Home from "./Componants/Layout/Home";
import Orders from "./Componants/Orders/Orders";
import Inventory from "./Componants/Inventory/Inventory";
import Login from "./Componants/Login/Login";
import cartProductsLoader from "./loaders/cartProductsLoader";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Shop />,
            },
            {
                path: "/orders",
                element: <Orders />,
                loader: cartProductsLoader,
            },
            {
                path: "/inventory",
                element: <Inventory />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
