import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <Container>
            <div className='mt-3'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-white text-decoration-none me-3' to="/">Home</Link>
                            <Link className='text-white text-decoration-none'>About</Link>
                        </Nav>
                        <Nav>
                            {user && <div className='text-white me-3 flex align-items-center'><FaUserCircle style={{'fontSize': '2rem'}}></FaUserCircle></div>}

                            {user? <Button onClick={handleLogout} variant="danger">Logout</Button> :
                            <Link to="/login"><Button variant="success">Login</Button></Link>}
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default NavigationBar;