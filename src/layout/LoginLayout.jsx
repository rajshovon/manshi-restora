
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/header/Header.jsx';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default LoginLayout;