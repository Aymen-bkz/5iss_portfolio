import React from 'react';
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom'

import logo from '../../assets/Com-logo.png'
import SDR_1 from '../../assets/SDR.JPG'
import SDR_2 from '../../assets/SDR_2.JPG'
import SDR_3 from '../../assets/SDR_3.JPG'
import NB_IOT from '../../assets/NB_IOT.JPG'
import WSN from '../../assets/WSN.JPG'


import './Communication.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import rapport_SDR from '../../assets/Raport SDR BOUKEZZATA BERTON.pdf'
import Rapport_NB_IoT from '../../assets/Rapport-NB-IoT.pdf'
import NB_Iot from '../../assets/NB_Iot.pdf'
import rapport_wsn from '../../assets/rapport_wsn.pdf'
import wsn from '../../assets/WSN.pdf'


const Communication = () => {
    return (
        <div className='communication'>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card className="header-card pt-3 card mt-5">
                        <Card.Img variant="top" src={logo} className='w-50 rounded mx-auto d-block' />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2 sous-titre'>Communication</h2>
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
                <h2 className='text-orange h2 sous-titre'>Software Defined Radio</h2>
                <Row>
                    <Col md={6}>
                        <p className="text-white">
                            La principale expérience que j'ai retenue de ce module concerne la série de travaux pratiques qui se sont
                            concentrés sur les radios définies par logiciel, et la pratique sur des périphériques Universal Software Radio
                            Peripheral (USRP) qui sont des radios définies par logiciel utilisées pour les applications RF.
                            Les émetteurs-récepteurs USRP peuvent émettre et recevoir des signaux RF dans plusieurs bandes. L'intérêt
                            de la SDR est de pouvoir remplacer l'utilisation de composants hardware pour le décalage de fréquence,
                            la démodulation et d'autres opérations clés pour recevoir un signal par un seul appareil, et toute la partie
                            décodage du signal est réalisée par logiciel. <br /> <br />
                            Dans les trois TPs, nous avons d'abord étudié la théorie du traitement du signal FM, puis nous avons utilisé
                            le logiciel Gnu radio pour exploiter un signal radio entrant. <br /> <br />
                            L'idée était de prendre en entrée un signal radio enregistré et d'essayer de démoduler le son radio de la source.
                            Pour cela, nous avons mis en place différents éléments de traitement, comme un déphaseur de fréquence, des filtres passe-bas pour
                            traiter le bruit, ou encore des démodulateurs de fréquence. Tout se fait par logiciel, en introduisant les paramètres et les variables
                            correctes pour les blocs GNU-radio prédéfinis qu'il suffit de relier entre eux de la bonne manière pour décoder le signal. <br /> <br />
                            Vous pouvez consulter l'intégralité du rapport sur le lien ci-dessous pour consulter le rapport. <br /> <br />
                            <Button href={rapport_SDR} target='Blank_'>
                                Rapport SDR
                            </Button>

                        </p>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                        <div style={{ maxWidth: "100%", width: "99%" }}>
                            <Carousel showStatus={false} showThumbs={false} autoPlay={false} >
                                <div>
                                    <img src={SDR_1} alt="SDR1" />
                                </div>
                                <div>
                                    <img src={SDR_2} alt="SDR2" />
                                </div>
                                <div>
                                    <img src={SDR_3} alt="SDR2" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <h2 id="technique" className='text-gray titre'>Partie Technique</h2>
                <h2 className="text-orange sous-titre">Protocoles pour les objets connectés</h2>
                <Row>
                    <Col md={4} className='d-flex flex-column justify-content-around'>
                        <div>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div>
                                    <Image src={NB_IOT} className='w-100' />
                                </div>
                            </Zoom>
                            <div className='d-flex justify-content-around mt-4 mb-4'>
                                <Button href={Rapport_NB_IoT} target="Blank_">Rapport NB-IoT</Button>
                                <Button href={NB_Iot} target='Blank_'>Présentation NB-IoT</Button>
                            </div>
                        </div>

                        <div>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div>
                                    <Image src={WSN} className='w-50 mx-auto d-block' />
                                </div>
                            </Zoom>
                            <div className='d-flex justify-content-around mt-4 mb-4'>
                                <Button href={rapport_wsn} target="Blank_" className='w-25' size="sm">Rapport MAC layer for WSN</Button>
                                <Button href={wsn} target='Blank_' className='w-25' size="sm">Présentation MAC layer for WSN</Button>
                            </div>
                        </div>

                    </Col>
                    <Col md={8}>
                        <p className="text-white">
                            les cours sur les protocoles pour les objets connectés se sont concentrés sur deux travaux. <br />
                            Le premier devoir en groupe, porte sur une étude approfondie des protocoles sur les WSN (Wireless Sensors Network) LoRA,
                            Sigfox, BLE, ZigBee, NB-IoT (5G), M2M (5G), LTE-M (5G). <br />
                            Pour chaque protocole, nous devions présenter :
                        </p>
                        <ul className='text-white'>
                            <li>La couche physique (modulation, fréquences, bande passante, etc.).</li>
                            <li>La couche MAC</li>
                            <li>La consommation d'énergie</li>
                            <li>La Sécurité</li>
                        </ul>
                        <p className="text-white">
                            Nous avons choisi le protocle NB-IoT, et J'étais chargé de présenter la partie sécurité. Je devais expliquer de manière
                            simple les méthodes utilisées par les opérateurs mobile pour sécuriser le canal de communication, la gestion des communications
                            DATA OVER No Access Stratum (DoNAS), et le No IP Data Delivery (NIDD). <br />
                            Cette tâche a été un défi pour moi, car je n'ai pas vraiment d'affinité les modules de communication et
                            les réseaux. Cependant, il existe de nombreuses ressources disponibles en ligne qui aident à comprendre
                            les concepts du protocole.
                        </p> <br /> <br />
                        <p className="text-white">
                            Le deuxième travail individuel porte sur le Medium Access Control (La couche MAC) dédié aux réseaux de capteurs
                            sans fil (WSN). <br />
                            Je devais comparer les différentes couches MAC en fonction de leurs types d'accès au canal ou je devais expliquer le protocole
                            de la couche MAC. Décrire si le protocole inclut la synchronisation, la capacitée de localisation,
                            le mécanisme de sécurité, la possibilité de mobilité et la consommation d'énergie. <br />
                            La recherche a été intense car il y avait beaucoup de protocoles et de documents qu'il fallait trier afin de récupérer
                            les protocoles les plus connus et les plus intéressants.
                            J'ai fini par prendre un protocole de chaque catégorie. D'autre part, la consommation d'énergie et la sécurité
                            de tous les protocoles ont été difficiles à trouver car je n'ai pas trouvé les ressources nécessaires.
                        </p>
                    </Col>
                </Row>
                <h2 className="text-orange sous-titre">from 3G to 5G</h2>
            </Container>
        </div>
    );
};

export default Communication;