import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDitailes from "../pages/NewsDitailes";
import PriveteRouter from "../Provider/PriveteRouter";

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
                hydrateFallbackElement: <p>loading...</p>,
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
        },
        {
            path: '/news-ditailes/:id',
            element: (<PriveteRouter>
                <NewsDitailes />
            </PriveteRouter>),
            hydrateFallbackElement: <p>loading...</p>,
            loader: () => fetch('/news.json'),
        }
]);