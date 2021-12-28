import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import Latex from 'react-latex'

import Sensor from '../../assets/AIME Sensor.svg'
import R_alu from '../../assets/R_alu.svg'
import R_poly from '../../assets/R_poly.svg'
import R_sens from '../../assets/R_sens.svg'

import './Smart_device.css'

const Smart_device = () => {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 100,
    })
    return (
        <div className='smart-device'>
            <Container fluid={true} >
                <animated.h2 style={{ margin: "1em", ...props }} className="text-light-gray">Smart Device</animated.h2>
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
                <animated.h2 style={{ margin: "1em", ...props }} className="text-light-gray">fabrication et intégration de capteurs nanotechnologiques (AIME)</animated.h2>
                <p className="text-white">Lors de notre stage à l’atelier Interuniversitaire Micro-nano Électronique (AIME) nous avons réalisé un capteur
                    chimique à l’Oxyde de Tungstène <Latex>{"${WO_3}$"}</Latex> de type semi-conducteur. les avantages des capteurs chimiques sont plusieurs, notamment la faible
                    consommation d’énergie et de coût. Leur principal désavantage se trouve à leurs sélectivité, l’analyse d’un mélange de gaz
                    nécessite plusieur capteur sensible pour chaque espèce gazeuses  </p>
                <div className='Sensor'>
                    <Image src={Sensor} className='sensor-img'></Image>
                </div>
                <Row>
                    <Col md={4} className='col_R_alu col-comp Sensor'>
                        <Image src={R_alu} className='R_alu-img sensor-img'></Image>
                    </Col>
                    <Col md={4} className='col_R_poly col-comp Sensor'>
                        <Image src={R_poly} className='R_poly-img sensor-img'></Image>
                    </Col>
                    <Col md={4} className='col_R_sens col-comp Sensor'>
                        <Image src={R_sens} className='R_sens-img sensor-img'></Image>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Smart_device;