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
import health from '../../assets/5g_health.JPG'
import SDN from '../../assets/SDN.JPG'
import cond0 from '../../assets/Energie/0.jpg'
import cond1 from '../../assets/Energie/1.jpg'


import './Communication.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import rapport_SDR from '../../assets/Raport SDR BOUKEZZATA BERTON.pdf'
import Rapport_NB_IoT from '../../assets/Rapport-NB-IoT.pdf'
import NB_Iot from '../../assets/NB_Iot.pdf'
import rapport_wsn from '../../assets/rapport_wsn.pdf'
import wsn from '../../assets/WSN.pdf'
import health_pdf from '../../assets/impact_5G_sante.pdf'
import SkillMatrixCommunication from '../../components/SkillMatrix/SkillMatrixCommunication';


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
                            <Card.Text className='text-gray fs-6'>
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
                            concentrés sur les radios définies par logiciel, et la pratique sur des périphériques Universal Software
                            Radio Peripheral (USRP) qui sont munies de cartes mères qui leur permettent de générer ainsi qu'analyser
                            différents types de signaux RF. Le logiciel quant à lui envoie des instructions à la radio USRP qui ont
                            été définies par un utilisateur.
                            <br /> <br />
                            Dans les trois TPs, nous avons d'abord étudié la théorie du traitement du signal FM, puis nous avons utilisé
                            le logiciel Gnu radio pour exploiter un signal radio entrant. <br /> <br />
                            L'idée était de récupérer un signal radio (radio FM) et d'essayer de démoduler le son radio de la source.
                            Pour cela, nous avons mis en place différents éléments de traitement, comme un déphaseur de fréquence, des
                            filtres passe-bas et des démodulateurs de fréquence. Tout se fait par logiciel, en introduisant les bons
                            paramètres et variables pour les blocs GNU-radio prédéfinis qui n'ont plus qu'à être reliés entre eux de
                            la bonne manière pour envoyer les configurations vers l'USRP afin de décoder le son. <br /> <br />
                            <Button href={rapport_SDR} target='Blank_' variant='secondary' >
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
                                <Button href={Rapport_NB_IoT} target="Blank_" variant='secondary'>Rapport NB-IoT</Button>
                                <Button href={NB_Iot} target='Blank_' variant='secondary'>Présentation NB-IoT</Button>
                            </div>
                        </div>

                        <div>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div>
                                    <Image src={WSN} className='w-50 mx-auto d-block' />
                                </div>
                            </Zoom>
                            <div className='d-flex justify-content-around mt-4 mb-4'>
                                <Button href={rapport_wsn} target="Blank_" className='w-25' size="sm" variant='secondary'>Rapport MAC layer for WSN</Button>
                                <Button href={wsn} target='Blank_' className='w-25' size="sm" variant='secondary'>Présentation MAC layer for WSN</Button>
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
                <Row>
                    <Col md={8} className='d-flex align-items-center'>
                        <p className="text-white">
                            Ce cours nous a permis de découvrir les générations de réseaux mobiles de la 3G à la 5G.
                            Le devoir consistait en une présentation par groupe de deux sur un sujet au choix sur la technologie 5G.
                            Notre sujet portait sur l'impact de la 5G sur la santé.
                        </p>
                    </Col>
                    <Col md={4} className='d-flex flex-column justify-content-around'>
                        <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <img src={health} alt="5g" className='w-100 d-blick mx-auto' />
                        </Zoom>
                        <Button href={health_pdf} target="Blank_" className='mt-4 mb-4' variant='secondary'> Impact de la 5G sur la santé</Button>
                    </Col>
                </Row>
                <h2 className="text-orange sous-titre">Réseaux émergents</h2>
                <Row>
                    <Col md={8} className='d-flex align-items-center'>
                        <p className="text-white">
                            Les cours sur les réseaux émergents étaient une introduction aux réseaux définis par logiciel. L'objectif
                            principal était de comprendre les nouveaux réseaux émergents qui sont très utiles dans un contexte IoT,
                            et de nous
                            faire manipuler ces réseaux. Les réseaux définis par logiciel nous permettent de gérer le réseau
                            de manière logicielle. <br /> <br />
                            Nous avons eu deux travaux pratiques qui visaient à Illustrer les principes de fonctionnement
                            d’un réseau conforme au paradigme SDN/Openflow. <br />
                            Le but du premier TP est de prendre en main le fonctionnement
                            d’un réseau SDN/Openflow pour déployer au final un réseau de constitué de 4 commutateurs Pica 8 compatible
                            Openflow et d’un contrôleur Openflow Ryu. <br />
                            Le dernier TP, nous avons découvert comment developper un contrôleur SDN en python.

                        </p>
                    </Col>
                    <Col md={4} className='d-flex align-items-center'>
                        <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <img src={SDN} alt="5g" className='w-100 d-blick mx-auto' />
                        </Zoom>
                    </Col>
                </Row>
                <h2 className="text-orange sous-titre">L'énergie pour les objets connectés</h2>
                <p className="text-whie">
                    L'objectif de ce module est de présenter la mise en place de règles de sécurité pour faire face aux différentes
                    attaques relatives aux objets connectés. Nous avons dû produire une analyse de sécurité sur notre projet innovant
                    afin d'identifier les informations à protéger pour notre système.
                    Les travaux pratiques de ce cours se sont concentrés sur les attaques matérielles basées sur l'injection de fautes.
                    Il s'agit d'introduire une faille pyhique dans le système afin de modifier son comportement. L'objectif de ce
                    laboratoire était de comprendre le fonctionnement de ces attaques et de proposer.
                </p>
                <Row>
                    <Col lg={5}>
                        <Carousel showStatus={false} showThumbs={false} autoPlay={false} infiniteLoop>
                            <div>
                                <img src={cond0} alt="SDR1" className='w-75' />
                            </div>
                            <div>
                                <img src={cond1} alt="SDR2" className='w-50' />
                            </div>
                        </Carousel>
                    </Col>
                    <Col lg={7} className='d-flex align-items-center'>
                        <p className="text-white">
                            Le cours sur l'énergie pour les objets connectés porte sur les différentes méthodes de récolte d'énergie pour les
                            systèmes embarqués et les différents types de stockage tels que les batteries et les supercondensateurs.
                            Nous avons également suivi l'un des travaux pratiques sur la récolte et le transfert d'énergie sans fil par
                            le biais d'ondes électromagnétiques.
                            Les antennes utilisées dans ce laboratoire n'ont malheureusement pas fonctionné correctement et nous n'avons
                            pas pu réaliser tous les tests par nous-mêmes. D'autre part, nous avons pu voir quelques expériences sur la
                            récolte d'énergie en termes de portée, mais cette technologie n'est pas encore mature pour ce qu'elle rapporte
                            comme rendement. <br />
                            Nous avons également eu deux autres travaux pratiques au laboratoire de l'AIME qui avaient pour but de
                            construire des micros supercondensateur. <br />

                            Vous pouvez trouver ci-dessous quelques photos du résultat <br />
                        </p>
                    </Col>
                </Row>
                <h2 className="text-orange sous-titre">Sécurité dans les réseaux d'objets connectés</h2>
                <p className="text-white">

                </p>
                <h2 id="description" className='text-gray titre'>Challenges rencontrés</h2>
                <p className="text-white">
                    Les difficultés que j'ai rencontrées durant le module de communication se trouvaient dans la partie recherche sur
                    les réseaux de capteurs sans fil. La documentation était très vaste, en particulier les couches MAC, avec le peu de
                    connaissances, il s'agissait de notions techniques et spécialisées qu'il était nécessaire de comprendre en autonomie.
                </p>
                <h2 id="description" className='text-gray titre'>Revue générale</h2>
                <p className="text-white">
                    Le module sur la communication était très complet et varié. Comme je viens d'une formation en électronique
                    automatique, Système embarqué m'a permis d'acquérir des compétences en hardware et en logiciel embarqué. A travers
                    ce module j'ai appris de nouvelles compétences pour communiquer mes futurs systèmes notamment sur le choix des
                    protocoles en fonction des contraintes que ce soit en termes de consommation d'énergie, de portée, de fréquences,
                    de bande passante, de sécurité, etc.
                    Ce que j'ai vraiment apprécié dans ce module, c'est qu'il a abordé l'IoT sous différents angles, à la fois techniques
                    et théoriques, pour nous donner une image claire et complète de l'état actuel de l'Internet des objets.
                </p>
                <h2 id="description" className='text-gray titre'>Partie Analytique</h2>
                <SkillMatrixCommunication />
            </Container>
        </div>
    );
};

export default Communication;