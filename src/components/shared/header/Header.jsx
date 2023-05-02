import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const [navItems, setNavItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/headernavbar')
            .then(res => res.json())
            .then(data => setNavItems(data))
            .catch(error => console.log(error))
    }, []);
    // console.log(navItems);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/' className='text-uppercase text-decoration-none fw-bold text-black'>man<span className='text-danger'>shi</span></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='px-5 mx-2'></div>
                        <Nav className="mx-auto pt-3 fw-semibold">
                            {
                                navItems.map(navItem => <p key={navItem.id}>

                                    <Link to={`/${navItem.path}`} className='text-decoration-none text-black  px-3 '>{navItem.name}</Link>

                                </p>)
                            }

                        </Nav>
                        <Nav className='  fw-semibold'>
                            <Link to="/login" className='text-white text-decoration-none'> <CgProfile /> Login</Link>
                            <span className='px-2'>or</span>
                            <Link to='/register' className='text-white text-decoration-none'> SingUp</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;