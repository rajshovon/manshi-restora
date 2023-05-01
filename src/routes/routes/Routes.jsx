import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main.jsx";
import Home from "../../pages/home/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;