import React from 'react';
import './navbar.sass'
import logo from '../../assets/logo.png'
import { Nav, Button } from "react-bootstrap";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai"
import { BsFillPersonLinesFill, BsReverseLayoutTextSidebarReverse, BsFillMenuButtonFill, BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);
    const [dimensions, setDim] = useState({
        innerH: window.innerHeight,
        innerW: window.innerWidth
    });
    const props = useSpring({
        from: { translateX: 0},
        to: { translateX: -200},
        config: { duration: 500 },
        reverse: sideBar,
    })
    useEffect(() => {
        function handleResize() {
            setDim({
                innerH: window.innerHeight,
                innerW: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        if (dimensions.innerW > 431) setSideBar(true);

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [sideBar, dimensions])
    return (
        <div className='navbar_cmp' style={{ height: sideBar ? '100vh': '4em', transitionDelay: sideBar ? '': '0.5s'}}>
            <animated.div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark navbar-active" style={{ width: "185px", ...props}}>
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
                        <Nav.Link as={Link} to='/portfolio' style={{ color: "white" }} eventKey={2}>
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
            </animated.div>
            <div className='navbar-resp bg-dark' style={{ transform: 'translateX(-185px)' }}>
                <Button variant="light" className='navbar-btn'>
                    <BsFillMenuButtonFill style={{ display: sideBar ? 'none' : '' }} onClick={() => { setSideBar(!sideBar); console.log(sideBar); }}></BsFillMenuButtonFill>
                    <BsXLg style={{ display: sideBar ? '' : 'none' }} onClick={() => { setSideBar(!sideBar); console.log(sideBar); }}></BsXLg>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;