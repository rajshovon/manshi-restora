import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer.jsx";
import Header from "../components/shared/header/Header.jsx";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;