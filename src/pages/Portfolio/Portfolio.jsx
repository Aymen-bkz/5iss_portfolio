import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'
import Cards from '../../components/cards/cards';
import Cards_2 from '../../components/cards/Cards_2';

import './Portfolio.scss'

import img from '../../assets/test.svg'





const Portfolio = () => {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
        config: { duration: 500 },
    })
    return (
        <div className='portfolio'>
            <Container>
                <Row>
                    <Col md={12} className=''>
                        <animated.h2 style={{margin: "1em", ...props}} className="text-orange">Mon Portfolio</animated.h2>
                        <Cards></Cards>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className=''>
                        <Cards_2></Cards_2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;