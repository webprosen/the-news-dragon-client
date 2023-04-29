import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div className='mt-4 mb-4'>
                <h4 className='mb-3'>Login With</h4>
                <div className='mb-2'>
                    <Button variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                </div>
                <div>
                    <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                </div>
            </div>
            <div className='mb-4'>
                <h4 className='mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;