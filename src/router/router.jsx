import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
        path: '/',
         Component: Layouts,
         children: [
            {
                index: true, element: <Home />
            },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: () => fetch('/news.json')
            }
         ]
        },
        {
            path: '/auth',
            element: <AuthLayout />,
            children: [
                {path: '/auth/login', element: <Login />},
                {path: '/auth/register', element: <Register />}
            ]
        }
]);