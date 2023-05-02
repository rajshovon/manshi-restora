import { useContext, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from './../../contexts/AuthProvider';
import './Login.css';


const Login = () => {

    const { userLogin, resetPassword, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";
    const emailRef = useRef();



    const handlerSingin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        // console.log("samaul", email, password);

        userLogin(email, password)
            .then(Result => {
                const loggedUser = Result.user;
                console.log(loggedUser);
                // console.log('samaul', user);
                navigate(froms, { replace: true });
            })
            .catch(error => {
                console.log(error);
            });

    }

    const handleResetPassword = () => {
        const email = (emailRef.current.value);
        if (!email) {
            alert("please provide uour email ");
        }
        resetPassword(email)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLoginwithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = () => {
        loginWithGithub()
            .then(result => {

                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <>
            <div className='login-banner-section'>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundColor: "rgba(0,0,255,.1)" }}>
                <div className='w-50 bg-white p-5 rounded' >
                    <h5 className='text-center fs-2 fw-bold'>Login your account</h5>
                    <hr />
                    <Form onSubmit={handlerSingin} className="w-75 mx-auto">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="fw-semibold fs-6">Email address</Form.Label>
                            <Form.Control className="border-0" style={{ backgroundColor: "rgba(0,0,255,.1)" }} type="email" name='email' ref={emailRef} required placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Label className="fw-semibold fs-6" htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            placeholder="Enter your password"
                            className="border-0"
                            style={{ backgroundColor: "rgba(0,0,255,.1)" }}
                            name='password'
                            required
                        />
                        <div className="my-2">
                            <p> <small className='text-danger'>Forgate Password<button className='btn btn-link text-decoration-none text-danger fw-normal' onClick={handleResetPassword}>Reset Password</button></small></p>
                        </div>
                        <div className="d-grid my-4">

                            <Button type='submit' variant="secondary" size="lg">
                                Login
                            </Button>

                        </div>
                        <h6 className='text-center'>Dont’t Have An Account ? <Link to='/register' className='text-decoration-none text-danger fw-semibold'>Register</Link></h6>
                    </Form>
                    <div className='d-flex justify-contant-center align-items-center gap-3'>

                        <div className='w-50'>
                            <Button onClick={handleLoginwithGoogle} className='my-2  w-100' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                        </div>
                        <div className='w-50'>
                            <Button onClick={handleGithubLogin} className='px-3 w-100' variant="outline-secondary" ><FaGithub />Login with Github</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;