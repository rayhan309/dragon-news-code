import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";

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
        }
]);