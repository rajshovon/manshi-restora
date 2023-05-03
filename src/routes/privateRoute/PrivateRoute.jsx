import { default as React, default as React, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider.jsx';


const PrivateRoute = () => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    // console.log(location);
    if (loader) {
        return <div>Loading......</div>
    };
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;