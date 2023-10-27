// we define all our routes here

import { Navigate, createBrowserRouter } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Surveys from "./views/Surveys";
import Signup from "./views/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import NotFound from "./views/NotFound";

// routing
const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />,
            },
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/surveys",
                element: <Surveys />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

export default router;
