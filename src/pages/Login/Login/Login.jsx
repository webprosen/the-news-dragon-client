import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || 'category/0';
    console.log(from);

    const handleLogin = () => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
            navigate(from);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='container pt-5' style={{'maxWidth': '500px', 'margin': 'auto'}}>
            <h2 className='mb-3'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <div className='mb-3'>Don't Have Account? <Link to="/register">Register</Link></div>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;