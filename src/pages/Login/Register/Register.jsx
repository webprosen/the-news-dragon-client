import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='container pt-5' style={{'maxWidth': '500px', 'margin': 'auto'}}>
            <h2 className='mb-3'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Photo URL" name="photo" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" label="I agrre with terms & conditions" />
                </Form.Group>
                <div className='mb-3'>Already Have Account? <Link to="/login">Login</Link></div>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;