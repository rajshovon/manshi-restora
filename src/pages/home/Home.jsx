import Dropdown from 'react-bootstrap/Dropdown';
import { MdLocationOn } from "react-icons/md";

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ManageServices from '../manageServices/ManageServices.jsx';
import ServicesTable from '../manageServices/servicesTable/ServicesTable.jsx';
import './Home.css';
import CoreFeatures from './coreFeatures/CoreFeatures.jsx';
const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <div className='banner-section'>
                    <div className='text-section'>
                        <h1 className='fw-bld'>Enjoy Our <br /> Delicious Meal</h1>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. proin ac rutrum neque, vel congue tellus duis vanenatis nisi ligulavarius.</p>

                        <div className='d-flex gap-3 justify-content-center align-items-center dropdown-field'>
                            <Dropdown>
                                <Dropdown.Toggle className='find-btn-ah' variant="white" id="dropdown-basic">
                                    Ahmedabad
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div>
                                <Link className='text-secondary fw-semibold text-decoration-none' to='/'> <MdLocationOn /> Drop Your Location</Link>
                            </div>
                            <div className='ms-auto'>
                                <Button className='find-btn' type='btn'>Find Restaurant</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* core future */}
            <CoreFeatures></CoreFeatures>
            {/* manege services */}
            <ManageServices></ManageServices>
            {/* services table */}
            <ServicesTable></ServicesTable>
        </div>
    );
};

export default Home;