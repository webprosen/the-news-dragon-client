import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <PrivateRoute><NewsLayout></NewsLayout></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;