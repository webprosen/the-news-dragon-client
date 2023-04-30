import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <Container>
            <div className='text-center py-4'>
                <img src={logo} width=""></img>
                <p className='mb-1 mt-3'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee  speed={100}>
                    Match Highlights: Germany vs Spain — as it happened
                </Marquee>
            </div>
            <NavigationBar></NavigationBar>
        </Container>
    );
};

export default Header;