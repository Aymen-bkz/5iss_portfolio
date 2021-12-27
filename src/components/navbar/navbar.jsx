import React from 'react';
import './navbar.sass'
import logo from '../../assets/logo.png'
import Nav from "react-bootstrap/Nav";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai"
import { BsFillPersonLinesFill, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar_cmp'>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "185px" }}>
                <Link to='/' className='d-flex align-items-center mb-3 mb-md-0 justify-content-center text-white text-decoration-none'>
                    <div style={{ background: "white", borderRadius: "0.2rem" }}>
                        <img src={logo} className='bi' alt='Logo' style={{ width: "89px" }} />
                    </div>
                </Link>
                <hr />
                <Nav variant="pills" className="flex-column mb-auto" defaultactivekey="/">
                    <Nav.Item className='text-start' style={{ margin: "1rem 0" }}>
                        <Nav.Link as={Link} to='/' style={{ color: "white" }} eventKey={0} className='root-path'>
                            <AiOutlineHome className='bi me-2' /> Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-start' style={{ margin: "1rem 0" }}>
                        <Nav.Link as={Link} to='/about' style={{ color: "white" }} eventKey={1}>
                            <BsFillPersonLinesFill className="bi me-2" /> About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-start' style={{ margin: "1rem 0" }}>
                        <Nav.Link as={Link} to='/portfolio'  style={{ color: "white" }} eventKey={2}>
                            <AiOutlineFundProjectionScreen className="bi me-2" /> Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-start' style={{ margin: "1rem 0" }}>
                        <Nav.Link as={Link} to='resume' style={{ color: "white" }} eventKey={3}>
                            <BsReverseLayoutTextSidebarReverse className="bi me-2" /> Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <hr />
            </div>
        </div>
    );
};

export default Navbar;