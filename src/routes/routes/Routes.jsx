import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main.jsx";
import Home from "../../pages/home/Home.jsx";
import Login from "../../pages/login/Login.jsx";
import Registration from "../../pages/registration/Registration.jsx";
import LoginLayout from './../../layout/LoginLayout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            }, {
                path: 'register',
                element: <Registration></Registration>
            }

        ]
    }, {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
]);

export default router;