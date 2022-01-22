import React from 'react';
import { Card, Col, Container, Image, Row, Table } from 'react-bootstrap';
import ImageZoom from 'react-medium-image-zoom';

import './Middleware.css'

import logo from '../../assets/middleware_logo.JPG'

import OneM2M from '../../assets/OneM2M.png'
import MQTT from '../../assets/MQTT.jpg'
import SOA_arch from '../../assets/SOA_arch.JPG'
import SOA_dash from '../../assets/SOA_dash.JPG'
import node_red_mqtt_om2m from '../../assets/node_red_mqtt_om2m.png'
import openstack from '../../assets/openstack.JPG'
import SkillMatrixMiddleware from '../../components/SkillMatrix/SkillMatrixMiddleware';

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
                            <th style={{ borderBottomLeftRadius: "0.5em" }}>Cloud & autonomic management</th>
                            <th style={{ borderBottomRightRadius: "0.5em" }}>
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
                    L'application doit gérer des actionneurs tels que les portes, les fenêtres, les volets, etc. Elle doit également renvoyer les valeurs
                    des capteurs présents dans les salles afin de les traiter pour activer les actionneurs. <br />
                    Le projet doit être initialisé avec le Framework SpringBoot, donc en langage JAVA et déployer une interface graphique
                    pour que les utilisateurs puissent voir l'état les microservices et les contrôler.
                </p>
                <h2 className='text-orange h2 sous-titre'>Middleware for IoT</h2>
                <p className="text-white">
                    Le cours sur le middleware était principalement sur le Mooc de l'INSA et la plateforme Openclassroom où les cours étaient
                    bien expliqués et présenter avec des vidéos.
                </p>
                <Row>
                    <Col md={8} className="d-flex align-items-center">
                        <p className="text-white">j'ai pu découvrir le standard OneM2M qui propose une vision générale des systèmes
                            connectés, et nous préparer à la compétition du Hackathon.
                            L'architecture du standard est modélisée par une première couche applicative, les AE (Application Entities)
                            qui représentent les applications connectées au système. Ensuite la couche service représentée par les CSE
                            (Common Servies Entities), qui fournissent des services aux applications enregistrées. Enfin la couche
                            transport, liée au transfert physique des données. <br /> <br />
                            Cependant, j'ai découvert d'autres protocoles comme MQTT (Message Queuing Telemetry Transport).
                            En effet c'est un protocole très utilisé dans les objets connectés, adapté à la mobilité des systèmes.
                            Il fonctionne avec un médiateur (le Broker) qui gère la messagerie Publish/Subscribe des sujets.
                        </p>

                    </Col>
                    <Col md={4} className="d-flex flex-column ">
                        <ImageZoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mb-3'>
                                <Image src={OneM2M} className='w-75 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                        <ImageZoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mt-3'>
                                <Image src={MQTT} className='w-75 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                    </Col>
                </Row>
                <h2 className='text-orange h2 sous-titre'>Cloud computing</h2>
                <p className="text-white">
                    Le cours sur la gestion du cloud comportait deux cours magistraux, directement suivies de cinq travaux pratiques.
                    Nous avons étudié les machines virtuelles et les conteneurs hébergés à l'aide de VirtualBox, et les machines virtuelles
                    utilisant la plateforme Openstack. l'objectif était de connaitre les concepts et les techniques de virtualisation.
                </p>
                <h2 id="description" className='text-gray titre'>Partie technique</h2>
                <h2 className='text-orange h2 sous-titre'>Service Oriented Architecture</h2>
                <p className="text-white">
                    Les challenges techniques de la SOA étaient principalement liés aux différentes technologies que les cours nous ont
                    fait manipuler avant le début du projet. L'idée principale était de pouvoir créer et déployer des services Web en utilisant
                    SOAP qui était techniquement un peu difficile et obsolète. Puis le REST qui est considéré comme une solution plus rapide
                    pour construire des API et des services Web.
                </p>
                <Row>
                    <Col>
                        <ImageZoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mt-3'>
                                <Image src={SOA_arch} className='w-75 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                        <ImageZoom zoomMargin={50} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mt-3'>
                                <Image src={SOA_dash} className='w-75 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                    </Col>
                    <Col md={8} className="d-flex align-items-center">
                        <p className="text-white">
                            Le projet doit être déployé sur les micro-services du Framework SpringBoot. L'architecture consiste à créer,
                            pour chaque type de capteurs et d'actionneurs, un microservice qui possède un modèle pour décrire les Setter
                            et Getter et des ressources pour traiter les requêtes REST. Ensuite, nous avons un contrôleur qui gère tous
                            les micro-services avec de multiples scénarios.Sur le même contrôleur, une page web de tableau de bord est
                            créée en front-end avec HTML, Javascript comme un visuel du système pour les utilisateurs qui affiche les
                            valeurs des capteurs et le statut des actionneurs. <br /> <br />
                            La difficulté sur notre architecture se situait au niveau du contrôleur, il fallait récupérer une liste de
                            classe pour chaque capteurs et actionneurs de toutes les salles de l'INSA. D'autre part, le restTemplate du
                            springframework ne retourne qu'une liste d'Objets, on perd donc les méthodes des classes. Pour résoudre ce
                            problème, nous avons donc dû les reconvertir en classes avec la bibliothèque ObjectMapper.
                        </p>
                    </Col>
                </Row>
                <h2 className='text-orange h2 sous-titre'>Middleware for IoT</h2>
                <Row>
                    <Col md={6}>
                        <p className="text-white">
                            Durant le TP j'ai réalisé un cas d'utilisation d'un système qui regroupe l'ensemble des protocoles de
                            communication MQTT, OM2M et une couche applicative avec Node-Red.
                            Le serveur OM2M gère toute la partie commande des actionneurs en générant des lampes virtuelles sur MN-CSE avec
                            des requêtes REST.
                            <br />
                            Avec un Node-MCU ESP8266, un capteur de luminosité et un bouton. Le Node-MCU renvoie les valeurs du capteur de
                            luminosité et publie périodiquement l'ensemble des données au broker. Si le bouton est pressé,
                            il déclenche une interruption qui publie la commande pour changer l'état des lampes.
                            <br />
                            Le Node-rouge vient enfin contrôler le système. Il s'abonne à la topique du capteur de la luminosité. En fonction
                            des valeurs du capteur, il allume et éteint les lampes sur le serveur OM2M.
                        </p>
                    </Col>
                    <Col md={6} className='d-flex align-items-center'>
                        <ImageZoom zoomMargin={150} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mt-3'>
                                <Image src={node_red_mqtt_om2m} className='w-100 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                    </Col>
                </Row>
                <h2 className='text-orange h2 sous-titre'>Cloud computing</h2>
                <p className="text-white">
                    L'objectif de "Cloud et autogestion" est de découvrir les différentes méthodes de virtualisation et les points
                    fondamentaux des deux grandes structures de virtualisation que sont les machines virtuelles (VM) et les conteneurs (CT)
                    sur Virtual Box et Docker.
                    Nous avons comparé les deux types de structures sur le point du coût de la virtualisation en termes d'allocation
                    de mémoire et d'utilisation du CPU pour le traitement. La sécurité des applications et le niveau d'isolation entre les
                    ressources et les droits d'accès. La performance et le temps de réponse. Les outils de support pour la continuité de
                    l'intégration.
                    <br /> <br />
                </p>
                <Row>
                    <Col md={5}>
                        <ImageZoom zoomMargin={100} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mt-3'>
                                <Image src={openstack} className='w-75 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                    </Col>
                    <Col md={7} className="d-flex align-items-center">
                        <p className="text-white">
                            Ensuite, nous avons utilisé une autre technologie, Openstack. Il s'agit d'un serveur bare metal, qui fournit des
                            machines virtuelles fonctionnant directement sur la couche matériel du serveur et que vous pouvez administrer
                            via une interface web. Openstack permet également la virtualisation du réseau.
                            <br />
                            nous avons créé des topologies de réseau complexes avec des sous-réseaux locaux virtuels, des routeurs et
                            des machines virtuelles. Nous avons utilisé cette méthode pour mettre en œuvre une application de calculatrice
                            accessible depuis un réseau Internet public et faisant appel à des microservices de calculateurs cachés dans
                            un autre réseau local, connecté par une passerelle virtuelle.
                        </p>
                    </Col>
                </Row>
                <h2 id="description" className='text-gray titre'>Partie Analytique</h2>
                <Row>
                    <Col md={12}>
                        <p className="text-white">
                            Le module "Middleware et Service" est très important dans la formation ISS, j'ai pu découvrir beaucoup de notions sur
                            les protocoles de communication, notamment le standard OneM2M que j'ai pu manipuler lors de la compétition Hackathon.
                            Comme je viens de la formation AE, j'ai commencé avec un niveau débutant dans ce module, et j'ai pu élaborer
                            les architectures orientées services et déployer des microservices en back et front-end.
                            " Middleware for IoT " était un sujet où j'ai découvert le protocole MQTT pour la communication " Subscribe/Publish "
                            et la plateforme open-source OM2M pour le déploiement de serveurs M2M qui comporte une API RESTful fournissant des
                            procédures primitives pour l'authentification des machines, l'enregistrement des applications, la gestion
                            des conteneurs et l'autorisation des droits d'accès.
                            Quant au cours sur le cloud, il a probablement été le cours le plus difficile de ce module pour moi car il était
                            très basé sur une approche théorique et technique orientée plus pour les IR. Cependant, les 5 travaux pratiques
                            ont été très utiles car nous avons vraiment pris le temps de pratiquer la virtualisation à la fois sur VirtualBox
                            et Openstack, assimilant ainsi les principales compétences du cours.
                        </p>
                    </Col>
                    <Col md={12}>
                        <SkillMatrixMiddleware />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Middleware;