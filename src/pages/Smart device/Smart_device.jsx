import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Col, Container, Row } from 'react-bootstrap';

const Smart_device = () => {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    })
    return (
        <div className='smart-device' style={{marginLeft: "185px"}}>
            <Container fluid={true} >
                <Row>
                    <Col sm={12}></Col>
                    <animated.h2 style={{ margin: "1em", ...props }} className="text-light-gray">Smart Device</animated.h2>
                </Row>
            </Container>
        </div>
    );
};

export default Smart_device;