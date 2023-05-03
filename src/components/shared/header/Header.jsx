import { useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider.jsx';
import ActiveLink from './../ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user, logOut);


    const [navItems, setNavItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/headernavbar')
            .then(res => res.json())
            .then(data => setNavItems(data))
            .catch(error => console.log(error))
    }, []);
    // console.log(navItems);

    const handlerLogOut = () => {
        logOut()
            .then(result => { console.log(result); }
            )
            .catch(error => console.log(error)
            )
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Link to='/' className='text-uppercase text-decoration-none fw-bold text-black logo-manshi'><Image src='https://i.ibb.co/J3yppZL/namshi.png' /></Link>
                        {/* <Link to='/' className='text-uppercase text-decoration-none fw-bold text-black'>man<span className='text-danger'>shi</span></Link> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className=''></div>
                        <Nav className="mx-auto pt-3 fw-semibold">
                            {
                                navItems.map(navItem => <p key={navItem.id}>

                                    <ActiveLink to={`/${navItem.path}`} >{navItem.name}</ActiveLink >

                                </p>)
                            }

                        </Nav>
                        <Nav className=' d-flex justify-content-center align-items-center  fw-semibold'>
                            {user &&
                                <Link className='text-decoration-none text-dark fw-semibold'><Image style={{ width: "32px", height: "32px" }} src={user.photoURL} roundedCircle /></Link>
                            }

                            {user ?
                                <Button variant="btn"><Link onClick={handlerLogOut} className='text-decoration-none text-white fw-semibold'>Logout</Link></Button> : <>

                                    <Link to="/login" className='text-white text-decoration-none'> <CgProfile /> Login</Link>
                                    <span className='px-2 text-danger'>or</span>
                                    <Link to='/register' className='text-white text-decoration-none'> SingUp</Link>
                                </>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;