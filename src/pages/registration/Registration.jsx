import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './../../contexts/AuthProvider';


const Registration = () => {



    const { createaccount, emailVarification } = useContext(AuthContext);
    // console.log(createaccount);
    const navigate = useNavigate();
    const location = useLocation();

    const froms = location.state?.from?.pathname || '/';

    const handlerSingUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const confrom = from.confrom.value;
        console.log(name, email, password, confrom);

        if (password !== confrom) {
            toast("Password did not match");
            return;
        } else if (!/[a-z]/g.test(password)) {
            toast("password give one character lowercase");
            return;
        }
        else if (!/[A-Z]/g.test(password)) {
            toast("password give one character uppercase");
            return;
        }
        else if (!/[0-9]/g.test(password)) {
            toast("password give one character Number");
            return;
        }
        else if (!/[@#$%^&*]/g.test(password)) {
            toast("password give one special character");
            return;
        }
        else if (password.length < 6) {
            console.log(password.length);
            toast("password give minimum 6 digit");
            return;
        } else {
            toast("Success fully resgister thank you!!");
        }



        createaccount(email, password)
            .then(Result => {
                const loggedUser = Result.user;
                emailVarification(loggedUser);
                console.log(loggedUser);
                navigate(froms, { replace: true });

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })





    }

    return (
        <div className='d-flex justify-content-center align-items-center py-5' style={{ backgroundColor: "rgba(0,0,255,.1)" }}>
            <div className='w-50 bg-white p-5 py-5 rounded' >
                <h5 className='text-center fs-2 fw-bold'>Register your account</h5>
                <hr />
                <Form onSubmit={handlerSingUp} className="w-75 mx-auto">
                    <Form.Group className="mb-3"  >
                        <ToastContainer />
                        <Form.Label className="fw-semibold fs-6">Your Name</Form.Label>
                        <Form.Control className="border-0" style={{ backgroundColor: "rgba(0,0,255,.1)" }} type="text" name='name' required placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label className="fw-semibold fs-6">Email address</Form.Label>
                        <Form.Control className="border-0" style={{ backgroundColor: "rgba(0,0,255,.1)" }} type="email" name='email' required placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
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
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label className="fw-semibold fs-6" htmlFor="inputPassword6">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword6"
                            aria-describedby="passwordHelpBlock"
                            placeholder="Enter your password"
                            className="border-0"
                            style={{ backgroundColor: "rgba(0,0,255,.1)" }}
                            name='confrom'
                            required
                        />
                    </Form.Group>


                    <div className="mb-3">
                        <Form.Check // prettier-ignore
                            required
                            type='checkbox'
                            label='Accept Term & Conditions'
                        />
                    </div>

                    <div className="d-grid my-4">

                        <Button type='submit' variant="secondary" size="lg">
                            Register
                        </Button>
                    </div>
                    <h6 className='text-center'>You Have An Account ? <Link to='/login' className='text-decoration-none text-danger fw-semibold'>Login</Link></h6>
                </Form>

            </div>
        </div >
    );
};

export default Registration;