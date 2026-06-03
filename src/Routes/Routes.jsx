import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "menu",
                element: <Menu></Menu>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "secret",
                element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
            },
        ]
    },
]);