import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';

import './Middleware.css'

import logo from '../../assets/middleware_logo.JPG'

const Middleware = () => {
    return (
        <div className='middleware'>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card className="header-card pt-3 card mt-5">
                        <Card.Img variant="top" src={logo} className='rounded mx-auto d-block' style={{ width: "39%" }} />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2 sous-titre'>Middleware and Service</h2>
                            <hr />
                            <Card.Text className='text-gray'>
                                Il y a des milliards d'appareils physiques dans le monde qui sont actuellement connectés à l'internet,
                                tous collectant et partageant des données. Dans ce cours, nous étudierons comment interfacer les composants
                                de l'IoT et comment déployer des services sur Internet.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2 id="description" className='text-gray titre'>Description</h2>
                <p className="text-white">
                    Le module Middleware & Service comprend 3 cours. Service Oriented Architecture (SOA), un modèle structurel sur les
                    services web. Middleware pour IoT, logiciel qui sert à interfacer les composants IoT comme OM2M. et Cloud & autonomic
                    management pour la virtualisation.
                </p>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th style={{ borderTopLeftRadius: "1em" }}>Middleware & Service</th>
                            <th style={{ borderTopRightRadius: "1em" }}>Missions et Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Service Oriented Architecture</th>
                            <th>Cours et travaux sur les concepts de services Web et d'architecture orientée services (SOA), tels que SOAP,
                                BPEL ou REST, et un projet d'application Web basé sur les microservices.
                            </th>
                        </tr>
                        <tr>
                            <th>Middleware for IoT</th>
                            <th>Cours et travaux pratiques sur la communication M2M comme le protocole OM2M basé sur la norme OneM2M,
                                le protocole MQTT et le développement d'applications qui relient le tout sur Red-node.
                            </th>
                        </tr>
                        <tr>
                            <th>Cloud & autonomic management</th>
                            <th>
                                Ce cours et travaux pratiques sur les principaux concepts du cloud computing, en abordant principalement les
                                techniques classiques telles que la virtualisation
                            </th>
                        </tr>
                    </tbody>
                </Table>
                <h2 className='text-orange h2 sous-titre'>Service Oriented Architecture</h2>
                <p className="text-white">
                    Les cours sur les services orientés architecture étaient entièrement sur moodle avec des explications vidéo et des quiz.
                    Les TD par contre étaient en présentiel, et nous avons pu manipuler des services web SOAP et REST comme serveur et
                    client sur des projets Maven. Nous avons ensuite réalisé des microservices avec le framework JAVA SpringBoot. <br /><br />
                    L'objectif principal du sujet SOA est de développer une application web (proof-of-concept) qui permet de contrôler les salles de l'INSA.
                    L'application doit gérer les actionneurs tels que les portes, les fenêtres, les volets, etc. Elle doit également renvoyer les valeurs
                    des capteurs présents dans les salles afin de les traiter pour activer les actionneurs. <br />
                    Le projet doit être initialisé avec le Framework SpringBoot, donc en langage JAVA et déployer une interface graphique
                    pour que les utilisateurs puissent voir l'état des microservices et les contrôler.
                </p>
                <h2 className='text-orange h2 sous-titre'>Middleware for IoT</h2>
                <p className="text-white">
                    
                </p>
            </Container>
        </div>
    );
};

export default Middleware;