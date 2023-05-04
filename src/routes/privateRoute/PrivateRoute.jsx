import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthProvider.jsx';


const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    if (loader) {
        return <div style={{ height: '80vh' }} className='w-100 d-flex justify-content-center align-items-center '><Image loading="lazy" src='https://media.tenor.com/je-huTL1vwgAAAAi/loading-buffering.gif' /></div>
    };
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;