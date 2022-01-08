import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';

import logo from '../../assets/Com-logo.png'

import './Communication.css'

const Communication = () => {
    return (
        <div className='communication'>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card className="header-card pt-3 card mt-5">
                        <Card.Img variant="top" src={logo} className='w-50 rounded mx-auto d-block' />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2'>Communication</h2>
                            <hr />
                            <Card.Text className='text-gray'>
                                L'internet des objets (IoT) est un vaste réseau de dispositifs équipés avec des capteurs qui permettent d'échanger ou de collecter
                                des données en se basant sur des protocoles de communication comme LoRA, BLE, NB-IoT...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2 id="description" className='text-gray titre'>Description</h2>
                <p className="text-white">
                    Le module communication comprend cinq matières. <br />
                    Les cours sont riches de nombreux sujets abordés, ayant pour point commun le domaine des objets connectés,
                    principalement sur les standard de communication LPWAN (Low Power Wide Area Network), et la sécurité des protocoles de communication.
                </p>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th style={{ borderTopLeftRadius: "1em" }}>Communication</th>
                            <th style={{ borderTopRightRadius: "1em" }}>Missions et Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Protocoles pour les objets connectés</th>
                            <th>Les cours sur les protocoles pour objets connectés ont présenté de nombreux protocoles différents pour les
                                "capteurs de réseaux sans fil", fondés sur des recherches d'articles et présentation des étudiants
                                sur les principaux protocoles de communication IoT (LoRA/LoRAWAN, Zigfox, Zegbee, Nb-IoT, LTE-M, BLE),
                                et des recherches sur les différents couches MAC pour les WSN (Wireless Sensors Network)
                            </th>
                        </tr>
                        <tr>
                            <th>From 3G to 5G</th>
                            <th>Les cours décrivent l'évolution de la technologie des réseaux mobiles de la 3G à la 5G, voire même la future
                                6G, et présenter un sujet de choix personnel lié à l'une de ces technologies.
                            </th>
                        </tr>
                        <tr>
                            <th>Energie pour les objets connectés</th>
                            <th>
                                Introduction générale sur la collecte d'énergie et le transfert d'énergie sans fil vers les appareils IoT.
                            </th>
                        </tr>
                        <tr>
                            <th>Sécurité du réseau pour les objets connectés</th>
                            <th>
                                Présentations générales sur les principaux concepts des réseaux et des applications attaques/défenses concernant les
                                réseaux sans fil notamment pour l'IoT.
                                nous avons passé en revue les principaux types d'attaques, leur classification et comment nous pouvons mettre en
                                place une défense pour les contrer.
                            </th>
                        </tr>
                        <tr>
                            <th style={{ borderBottomLeftRadius: "0.5em" }}>Réseaux émergents</th>
                            <th style={{ borderBottomRightRadius: "0.5em" }}>
                                Présentation des technologies et normes émergentes en matière de réseaux, visant à changer la façon dont les
                                réseaux seront construits à l'avenir. Principalement axé sur les SDN (Software Defined Network) et les techniques
                                de routage.
                            </th>
                        </tr>

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Communication;