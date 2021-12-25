import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'

import './Portfolio.scss'

import Cards from '../../components/cards/cards';

const Portfolio = () => {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    })
    return (
        <div className='portfolio'>
            <Container fluid={true}>
                <Row>
                    <Col md={12} className=''>
                        <animated.h2 style={{margin: "4rem", ...props}} className="text-light-gray">Mon Portfolio</animated.h2>
                        <Cards></Cards>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;