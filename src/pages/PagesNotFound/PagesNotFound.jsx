import React from 'react';
import { Link } from 'react-router-dom';
import './PagesNotFound.css';
;
const PagesNotFound = () => {
    return (

        <div id="colorlib-notfound">
            <div className="colorlib-notfound">
                <div className="colorlib-notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2 id="colorlib_404_customizer_page_heading">404 - PAGE NOT FOUND</h2>
                <p id="colorlib_404_customizer_content">The page you are loking for might have been remoded <br /> had its name changed or is temporarily unavailable.</p>
                <Link to='/'>GO TO HOMEPAGE</Link>
            </div>



        </div>
    );
};

export default PagesNotFound;