import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>
    },
]);

export default router;