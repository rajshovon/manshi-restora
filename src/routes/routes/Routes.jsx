import {
    createBrowserRouter
} from "react-router-dom";
import Chefs_Layout from "../../layout/Chefs_Layout.jsx";
import About from "../../pages/About/About.jsx";
import Blog from "../../pages/Blog/Blog.jsx";
import Home from "../../pages/home/Home.jsx";
import ChefsConteiner from "../../pages/home/topChefs/ChefsConteiner/ChefsConteiner.jsx";
import Login from "../../pages/login/Login.jsx";
import Registration from "../../pages/registration/Registration.jsx";
import PrivateRoute from "../privateRoute/PrivateRoute.jsx";
import Main from './../../layout/Main';
import SngleChefs from './../../pages/home/topChefs/SngleChefs/SngleChefs';
import Contact from "../../pages/Contact/Contact.jsx";
import Services from "../../pages/Services/Services.jsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: 'login',
                element: <Login></Login>
            }, {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'chefs',
                element: <ChefsConteiner></ChefsConteiner>
            }, {
                path: 'aboutus',
                element: <About></About>
            }, {
                path: 'services',
                element: <Services></Services>
            }
            , {
                path: 'blog',
                element: <Blog></Blog>
            }
            , {
                path: 'contactus',
                element: <Contact></Contact>
            }
        ]

    }, {
        path: "chefs",
        element: <Chefs_Layout></Chefs_Layout>,
        children: [


            ,
            {
                path: '/chefs/:id',
                element: <PrivateRoute><SngleChefs></SngleChefs></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]

    },

]);

export default router;