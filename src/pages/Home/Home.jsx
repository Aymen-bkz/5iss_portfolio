import React from 'react';
import TextAnime from "../../components/textAnime/textAnime"
import { Col, Container, Image, Row } from 'react-bootstrap';
import Work_img from '../../assets/Working.svg'
import FadeIn from 'react-fade-in'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'
import { useSpring, animated } from 'react-spring'

// import Navbar from '../../components/navbar/navbar';
import './Home.sass'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [styles, api] = useSpring(() => ({
        from: { translateY: 0 },
    }))

    useEffect(() => {
        api({
            translateY: 10,
            loop: { reverse: true },
        })
    }, [api])

    return (
        <div className='Home'>
            <Container fluid={true}>
                <Row>
                    <Col md={8} className='full-name'>
                        <TextAnime nom="BOUKEZZATA" prenom='Aymen' />
                    </Col>
                    <Col md={4} className='d-flex align-items-center position-relative'>
                        <FadeIn transitionDuration={1000} delay={100}>
                            <Image fluid="true" src={Work_img}></Image>
                            {/* <img src={Work_img} alt="Working" /> */}
                        </FadeIn>
                    </Col>
                    <div className='d-flex justify-content-center position-relative next' style={{ fontSize: "xxx-large" }}>
                        <FadeIn transitionDuration={300} delay={1800}>
                            <animated.div style={styles}>
                                <Link to="/portfolio">
                                    <BsFillArrowDownSquareFill className='text-light-gray' style={{ textDecoration: "inherit" }}></BsFillArrowDownSquareFill>
                                </Link>
                            </animated.div>
                        </FadeIn>
                    </div>
                </Row>

            </Container>
        </div>
    );
};

export default Home;