import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Footer.css';

import { Image } from 'react-bootstrap';
import { FaFacebook, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaRegPaperPlane, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='footer-bg'>
            <Container>

                <Row>
                    <Col sm>
                        <div>
                            <Link to='/' className='text-uppercase text-decoration-none fw-bold  text-white' style={{ fontSize: "24px", fontFamily: "cursive" }}>man<span style={{ color: 'orange' }}>shi</span></Link> <br />
                            {/* <Link to='/' className='text-uppercase text-decoration-none fw-bold text-black logo-manshi'><Image src='https://i.ibb.co/J3yppZL/namshi.png' /></Link> */}

                            <small className='text-white'>Curabitur posuere felis in massa pulvinar, nec molls nibh eleifend. maecenas turpis mi. Vuvamus pulvinar lobortis vehicula pellentesque.</small>
                            <div className="social-link-images">
                                <span><FaFacebook /></span>
                                <span><FaTwitter /></span>
                                <span><FaInstagramSquare /></span>
                            </div>
                        </div>
                    </Col>
                    <Col sm>
                        <div className='d-flex'>
                            <div className='pe-3'>
                                <h3 className='text-white' style={{ fontFamily: "cursive" }}>Links</h3>
                                <div className='w-25'>
                                    <hr style={{ color: "white", marginBottom: "0px" }} />
                                </div>
                                <Link className='text-decoration-none text-white' to='/'>Home</Link><br />
                                <Link className='text-decoration-none text-white' to='/aboutus'>About Us</Link><br />
                                <Link className='text-decoration-none text-white' to='/servies'>Servies</Link><br />
                                <Link className='text-decoration-none text-white' to='/blog'>Blog</Link><br />
                                <Link className='text-decoration-none text-white' to='/contactus'>Contact Us</Link>
                            </div>
                            <div>
                                <h3 className='text-white' style={{ fontFamily: "cursive" }}>Other Links</h3>
                                <div className='w-25'>
                                    <hr style={{ color: "white", marginBottom: "0px" }} />
                                </div>
                                <Link className='text-decoration-none text-white' to='/'>My Account</Link><br />
                                <Link className='text-decoration-none text-white' to='/aboutus'>Track Order</Link><br />
                                <Link className='text-decoration-none text-white' to='/servies'>Check Out</Link><br />
                                <Link className='text-decoration-none text-white' to='/blog'>Invoice</Link><br />
                                <Link className='text-decoration-none text-white' to='/contactus'>FAQ</Link>

                            </div>
                        </div>
                    </Col>
                    <Col sm>
                        <h3 className='text-white' style={{ fontFamily: "cursive" }}>Instagram Gallery</h3>
                        <Link to='/' className='text-uppercase text-decoration-none fw-bold text-black logo-manshi py-4 m-4'><Image src='https://i.ibb.co/4M4CmKR/fbg.png' /></Link>
                    </Col>
                    <Col sm>
                        <h3 className='text-white' style={{ fontFamily: "cursive" }}>Contact Us</h3>
                        <div className="text-white">
                            <p> <span><FaMapMarkerAlt /> 203, Envato ka Yents, Behind Alis <br /> Str, Melbourne, Australia.</span></p>
                            <p><span><FaPhoneAlt /> +8801981-154-473 <br />+61 921-124-3455 </span></p>
                            <p><span><FaRegPaperPlane /> info@foodor.com <br />mdsamaul843@gmail.com</span></p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;