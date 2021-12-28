import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Carousel, Col, Container, Image, Row, Table } from 'react-bootstrap';
import Latex from 'react-latex'

import Sensor from '../../assets/AIME Sensor.svg'
import R_alu from '../../assets/R_alu.svg'
import R_poly from '../../assets/R_poly.svg'
import R_sens from '../../assets/R_sens.svg'

import './Smart_device.css'
import { useEffect } from 'react';

const Smart_device = () => {
    const [imgs] = useState([Sensor, R_alu, R_poly, R_sens]);
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    })

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        document.querySelectorAll(".carousel-indicators button").forEach((el, i) => {
            el.style.backgroundImage = "url(\"" + imgs[i] + "\")";
            console.log(imgs[i]);
        })
    })


    return (
        <div className='smart-device'>
            <Container fluid={true} >
                <animated.h2 style={{ margin: "1em", ...props }} className="text-orange">Smart Device</animated.h2>
                <Row>
                    <Col sm={12}>
                        <p className='text-white intro'>
                            Smart Device est une unité de formation qui consiste au départ à fabriquer un capteur de gaz en
                            circuit intégré. Ensuite, concevoir un système électronique capable de détecter la présence de certains
                            gaz et mesurer leur concentration. Enfin, connecter le système à une gateway situé à l’INSA et communiquer
                            l’ensemble des données avec le protocole LoRAWan
                        </p>
                        <br />
                        <p></p>
                        <div className='maquette-smart-d'>
                            <Table striped bordered hover responsive="sm">
                                <thead>
                                    <tr>
                                        <th>Smart Device</th>
                                        <th>Superviseur</th>
                                        <th>Heures de formation</th>
                                        <th>Organisme</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>fabrication et intégration de capteurs nanotechnologiques (AIME)</th>
                                        <th>J.Grisolia</th>
                                        <th>14H</th>
                                        <th>INSA</th>
                                    </tr>
                                    <tr>
                                        <th><span>Microcontrollers and Open-Source Hardware, Embedded IA (Ms&OSH)</span></th>
                                        <th>J.Grisolia, S. Lohez</th>
                                        <th>25H</th>
                                        <th>INSA</th>
                                    </tr>
                                    <tr>
                                        <th>Introduction aux capteurs</th>
                                        <th>J.Grisolia</th>
                                        <th>11,25H</th>
                                        <th>INSA</th>
                                    </tr>
                                    <tr>
                                        <th>Laboratoires d'électronique analogique</th>
                                        <th>J.Grisolia</th>
                                        <th>2,5H</th>
                                        <th>INSA</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
                <animated.h2 style={{ margin: "1em", ...props }} className="text-orange">fabrication et intégration de capteurs nanotechnologiques (AIME)</animated.h2>
                <p className="text-white">Lors de notre stage à l’atelier Interuniversitaire Micro-nano Électronique (AIME) nous avons réalisé un capteur
                    chimique à l’Oxyde de Tungstène <Latex>{"${WO_3}$"}</Latex> de type semi-conducteur puis de l’évaluer sous
                    atmosphère gazeuse contrôlée pour en fournir la datasheet. <br /> Le procédé se décompose alors en 4
                    étapes : <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Elaboration du circuit intégré <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Synthèse des nanoparticules de <Latex>{"${WO_3}$"}</Latex> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• le dépot de la synthèse sur la puce <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Caractérisation électrique du capteur sous atmosphère contrôlée <br />
                    Les capteurs chimiques ont plusieurs avantages notamment leur faible consommation d’énergie et coût. Par contre leur principal
                    désavantage se trouve à leurs sélectivités, l’analyse d’un mélange de gaz nécessite plusieurs capteurs sensibles pour chaque espèce gazeuse. </p>
                <br />
                <p>L'objectif est de </p>
                <div className="Row-sensor">
                    <Row>
                        <Col md={6} className='d-flex justify-content-center'>
                            <Carousel fade activeIndex={index} onSelect={handleSelect} interval={null} className='Sensor-carousel'>
                                <Carousel.Item >
                                    <Image src={Sensor} ></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Capteur de gaz</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={R_alu} ></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Résistance Aluminium</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={R_poly} ></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Résistance polysilicium dopé N</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={R_sens} ></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Zone active qui acceil les nanoparticules</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>La puce fabriquée est formée de 4 composants: <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Une résistance en aluminium pour mesurer la température de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Une résistance en polysilicium pour chauffer la surface de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Deux peignes interdigités formant deux condensateur et qui deviendront des résistance 
                                apèrs de le dépot du <Latex>{"${WO_3}$"}</Latex> <br />
                            </p>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Smart_device;