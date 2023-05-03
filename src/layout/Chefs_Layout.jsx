import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/header/Header.jsx';

const Chefs_Layout = () => {
    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>


        </div>
    );
};

export default Chefs_Layout;