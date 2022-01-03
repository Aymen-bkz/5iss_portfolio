import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, Card, Carousel, Col, Container, Image, Modal, ModalTitle, Row, Table } from 'react-bootstrap';
import Latex from 'react-latex'
import { BsClipboardData, BsGithub } from 'react-icons/bs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import PCB_comp from '../../components/3d-component/3d-component'

import Sensor from '../../assets/AIME Sensor.svg'
import R_alu from '../../assets/R_alu.svg'
import R_poly from '../../assets/R_poly.svg'
import R_sens from '../../assets/R_sens.svg'
import Assembly from '../../assets/Assembly.png'
import DIE from '../../assets/DIE.png'
import goute from '../../assets/goute.png'
import LTC1050 from '../../assets/LTC1050.JPG'
import GASWO from '../../assets/GASWO.JPG'
import CMD_R_POLY from '../../assets/cmd_R_poly.JPG'
import intterupt from '../../assets/intterupt.JPG'
import PCB from '../../assets/PCB.JPG'
import card_head from '../../assets/card-head.jpg'
import RN2483 from '../../assets/RN2483.JPG'

import './Smart_device.css'
import { useEffect } from 'react';

import datasheet from '../../assets/Datasheet AIME.pdf'

const Smart_device = () => {
    const [imgs] = useState([Sensor, R_alu, R_poly, R_sens, Assembly, DIE, goute]);
    const [show, setShow] = useState(false);
    const handleClose = () => { window.location.reload(false) }
    const handleShow = () => setShow(true);
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
            <Container >
                <div className="d-flex justify-content-center">
                    <Card className='header-card pt-3 mt-5'>
                        <Card.Img variant="top" src={card_head} className='w-25 rounded mx-auto d-block' />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2'>Smart Device</h2>
                            <hr />
                            <Card.Text className='text-gray'>
                                Les dispositifs intelligents basés sur des capteurs sont partout dans notre vie quotidienne. Dans ce cours,
                                nous suivrons le processus complet de création d'un capteur de gaz intelligent, depuis le dépôt de nanoparticules
                                jusqu'à l'acquisition des données sur un microcontrôleur et la communication LoRa.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2 id="description" className='text-gray titre'>Description</h2>
                <Row>
                    <Col sm={12}>
                        <p className='text-white intro'>
                            Le  module "Smart Devices" regroupe quatre matière qui passent en revue les différentes étapes de la
                            fabrication d'un capteur de gaz.
                        </p>
                        <br />
                        <p></p>
                        <div className=''>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Smart Device</th>
                                        <th>Missions et Context</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>fabrication et intégration de capteurs nanotechnologiques (AIME)</th>
                                        <th>Une expérience complète dans la salle blanche de l'AIME d'une semaine qui consiste aux différents
                                            modules d'une demi-journée pendant lesquels nous avons pu superviser et manipuler les différents
                                            processus impliqués dans la fabrication d'un capteur à nanoparticules. L'objectif final était de
                                            fabriquer un capteur de gaz à partir de nanoparticules de tungstène, qui exprime une variation de
                                            résistance lors de la détection de gaz spécifiques.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><span>Microcontrollers and Open-Source Hardware, Embedded IA (Ms&OSH)</span></th>
                                        <th>Projet réalisé en groupe de trois, consistant à utiliser tous les composants que nous avons construits
                                            précédemment : le capteur de gaz et concevoir une PCB avec le circuit de traitement du signal, un
                                            module de communication LoRa/LoRaWAN et un ESP32 pour transformer notre capteur en capteur
                                            intelligent, envoyant des données vers le un serveur TTN.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Introduction aux capteurs</th>
                                        <th>Cours théoriques et travaux pratiques sur les concepts physiques des différents types de
                                            capteurs et sur la façon de créer une fiche technique de capteur. Cela nous aidera à
                                            construire la fiche technique de notre capteur de gaz.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Laboratoires d'électronique analogique</th>
                                        <th>Des travaux pratiques destinés à nous aider à concevoir le circuit analogique pour exploiter
                                            les valeurs de sortie de notre capteur  par le Convertisseur Analogique Numérique de notre
                                            microcontrôleur.
                                        </th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
                <h2 id="description" className='text-gray titre'>Partie Technique</h2>
                <animated.h2 style={props} className="text-orange titre">Fabrication et intégration de capteurs nanotechnologiques (AIME)</animated.h2>
                <p className="text-white">
                    La première expérience que nous avons eue dans le cadre du module
                    "Smart Devices" a été le stage d'une semaine dans la salle blanche de l'AIME (Atelier Interuniversitaire Micro-nano Electronique).
                    L'objectif final était de manipuler les différents processus impliqués dans la fabrication d'un capteur de nanotige de tungstem <Latex>{"${WO_3}$"}</Latex>
                    qui exprime une variation de résistance lors de la détection de gaz spécifiques.
                    <br />
                    <br /> Le processus de fabrication est composé de 4 parties étapes : <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Elaboration du circuit intégré <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Synthèse des nanoparticules de <Latex>{"${WO_3}$"}</Latex> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• le dépot de la synthèse sur la puce <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Caractérisation électrique du capteur sous atmosphère contrôlée <br />
                    <br />
                    Les capteurs chimiques présentent plusieurs avantages notamment leur faible consommation d’énergie et coût. Par contre leur principal
                    désavantage se trouve à leurs sélectivités, l’analyse d’un mélange de gaz nécessite plusieurs capteurs sensibles pour
                    chaque espèce gazeuse. </p>
                <br />
                <p>L'objectif est de </p>
                <div className="Row-sensor">
                    <Row>
                        <Col md={6} className='d-flex justify-content-center carousel-col mb-5'>
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
                                <Carousel.Item>
                                    <Image src={Assembly} className='w-100'></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Assemblage de la puce sur un boitier TO-5-10</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>La puce du capteur estS formée de 4 composants: <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Une résistance en aluminium pour mesurer la température de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Une résistance en polysilicium pour chauffer la surface de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Deux peignes interdigités formant deux condensateurs et qui deviendront des résistances
                                apèrs de le dépot du <Latex>{"${WO_3}$"}</Latex> <br /> <br />
                                Les étapes pour réaliser le circuit intégré du capteur du gaz: <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Oxydation de masquage (<Latex >{"$4500\\mathring{A}$"}</Latex>) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Dépot du poly-silicium  (<Latex >{"$600nm$"}</Latex>) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Gravure du polysilicium  (Photogravure n°1) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Dépot d'une couche d'oxyde sec <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Ouverture des contacts  (Photogravure n°2) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Gravure du métal  (Photogravure n°3) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Enfin l'assemblage de la puce dans un boitier TO-5-10 <br />

                            </p>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col md={6} className='d-flex justify-content-center align-items-center mb-4'>
                            <div className=''>
                                <p className='text-white'>
                                    La synthèse <Latex>{"$WO_3$"}</Latex> est produite à partir de l'hydrolyse et la condensation du <Latex>{"$Na_2WO_4$"}</Latex>,
                                    on récupère une solution jaune d’oxyde de tungstène, on recuit la solution au four à
                                    180°C pendants une heure laissant la croissance des nanotiges du <Latex>{"$WO_3$"}</Latex>.
                                    <br /> <br />
                                    On dépose une goutte de la synthèse WO3 sur le circuit intégré, ensuite en appliquant le phénomène du diélectrophorèse
                                    par la polarisation des électrodes du capteur avec signal alternatif sinusoïdal à 100kHz et une amplitude de 10Vpp.
                                    Les nano-tiges du WO3 s’accrochent sur les électrodes formant une résistance  réactive à la concentration du gaz de
                                    l'environnement.
                                    <br /> <br />
                                    A la fin du strage nous avons rassemblé les données de tous les capteurs. Avec les notions apprises au cours "Introduction aux capteurs"
                                    nous avons pu rédiger une fiche technique. <br />
                                    Vous pouvez trouver la fiche technique réalisée par mon groupe dans le lien ci-dessous : <br />

                                </p>
                                <br />
                                <Button className='btn-datasheet' href={datasheet} target="_blank"> Datasheet <BsClipboardData /> </Button>
                                {/* <button className='btn btn-datasheet' hred>Datasheet <BsClipboardData /></button> */}
                            </div>
                        </Col>
                        <Col md={6} className='d-flex justify-content-center carousel-col'>
                            <Carousel fade className='Sensor-carousel' interval={null}>
                                <Carousel.Item >
                                    <Image src={DIE} className='w-100'></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Appliquation du phénomène DIE</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={goute} className='w-100'></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Dépot d'une gôute du <Latex>{"$WO_3$"}</Latex></h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <animated.h2 style={props} className="text-orange MOSH">Laboratoires d'électronique analogique</animated.h2>
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>
                                Les laboratoires d'électronique analogique était des travaux pratiques pour concevoir un circuit électronique qui
                                serait capable de données des valeur éxploitable du capteur de gaz par le convertisseur Analogique
                                Numérique du microcontrôleur.
                                Le capteur de gaz étant une résistance sensible à la concentration du gaz deplus il est de l’ordre
                                des gigaohms, un diviseur de tension ne serait pas efficace pour que le convertisseur Analogique
                                Numérique (ADC) du microcontrôleur puisse lire les données. On a donc utilisé un amplificateur
                                opérationnel (LTC1050) avec une faible tension offset pour amplifier le courant passant par le capteur
                                et filtrer le bruit. <br />
                                La valeur de la résistance du capteur: <br />
                                <Latex displayMode={true}>{"$R_{sensor} = (1+\\frac{R_9}{R_8})\\cdot \\frac{V_{cc}}{V_{adc}}-R_6-R_7  $"}</Latex>
                            </p>
                        </Col>
                        <Col md={4}>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div className='img-div'>
                                    <Image src={LTC1050} className='w-100' />
                                    {/* <BsZoomIn className='zoom-icon' /> */}
                                </div>

                            </Zoom>
                        </Col>
                    </Row>
                    <animated.h2 style={props} className="text-orange titre">Microcontrollers and Open-Source
                        Hardware, Embedded IA (Ms&OSH)
                    </animated.h2>
                    <p className="text-white">
                        Une fois le capteur est fabriqué, Nous somme passé à la Conception du circuit électronique,
                        Nous avions beaucoup de liberté, car nous pouvions choisir entre suivre les laboratoires dirigés ou lancer le projet .
                        Avec mon équipe composé de AE et MSIOT nous somme décidé d'avancé sur le projet en autonomoie.
                        <br /><br />
                        On a divisé le travail en partie:
                    </p>

                    <Row>
                        <Col md={8} className='d-flex justify-content-center'>
                            <p className='text-white'>
                                <br />
                                La première partie coté software, on a commencé par la configuration du module LoRa RN2482,
                                avec les instructions du constructeur. On avait réussi à établir une communication radio
                                avec la couche physique entre deux module LoRa et transmettre de données d'un capteur
                                de gaz Grove. Ensuite nous avons utilisé la bibliothèque <span><a href="https://github.com/jpmeijers/RN2483-Arduino-Library">jpmeijers/RN2483-Arduino-Library</a> </span>
                                pour configurer le RN2483 pour établir une communication avec un serveur TTN avec la couche MAC du module (LoRaWAN)

                            </p>
                        </Col>
                        <Col md={4}>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div className='img-div'>
                                    <Image src={RN2483} className='w-100' />
                                    {/* <BsZoomIn className='zoom-icon' /> */}
                                </div>

                            </Zoom>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>
                                <br />
                                La deuxième partie coté hardware. En plus du circuit amplificateur, nous avons rajouté une commande du
                                capteur du gaz et un comparateur pour déclencher une interruption externe sur le microcontrôleur.
                                <br /> <br />
                                Le capteur de température a une résistance faible, un diviseur de tension suffi pour lire sa valeur avec la formule suivante: <br />
                                <Latex displayMode={true}>{"$R_{Alu} = (\\frac{V_{Alu.adc} \\cdot R_3}{3V3 - V_{Alu.adc}})  $"}</Latex> <br />
                                Un Switch SPDT pour commuter entre les deux capteur de gas
                            </p>
                        </Col>
                        <Col md={4}>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div className='img-div'>
                                    <Image src={GASWO} className='w-100' />
                                    {/* <BsZoomIn className='zoom-icon' /> */}
                                </div>

                            </Zoom>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>
                                <br />
                                Notre système est fonctionnel qu'à partir de 200°C, il faudrait donc appliquer une tension aux bornes
                                de la résistance poly-silicium, le courant traversant génère une chaleur qu’il faut là commander.
                                Une PWM 8 bits du microcontrôleur viens commander le transistor NPN de 0% à 100% (0 à 255), avec le capteur
                                de température on peut intégrer un correcteur numérique PID pour corriger la commande.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div className='img-div'>
                                    <Image src={CMD_R_POLY} className='w-100' />
                                    {/* <BsZoomIn className='zoom-icon' /> */}
                                </div>

                            </Zoom>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center lol'>
                            <p className='text-white'>
                                <br />
                                Nous avons rajouté un comparateur sur lequel on applique une tension de référence sur <Latex>{"$V_+$"}</Latex> qui représente le seuil
                                pour déclencher une interruption de la présence d’un certain gaz.&nbsp;
                                <Latex>{"$V_-$"}</Latex> sera la tension du capteur amplifié.
                                À l’état initial le <Latex>{"$V_- > V_+$"}</Latex>, on a un état 0 à la sortie du comparateur.
                                À la présence d’un gaz, la tension du capteur chute, <Latex>{"$V_- < V_+$"}</Latex> l’état du comparateur
                                passe à 1 le microcontrôleur capture le front montant et déclenche l'interruption. <br /> <br />

                                L'intégralité du code et schémas se trouve sur GitHub&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant='secondary' href='https://github.com/MOSH-Insa-Toulouse/2021-2022-BOUKEZZATA-BERTON-MESLOUH.git' target="_blank" style={{ margin: '1em' }}> <BsGithub /> </Button>

                            </p>
                        </Col>
                        <Col md={4}>
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div className='img-div'>
                                    <Image src={intterupt} className='w-100' />
                                    {/* <BsZoomIn className='zoom-icon' /> */}
                                </div>

                            </Zoom>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center' >
                            <div>
                                {/* <PCB_comp id="3d-pcb" dim={pcb_dim} /> */}
                                <Button variant="primary" onClick={handleShow}>
                                    PCB 3D model
                                </Button>

                                <Modal show={show} onHide={handleClose} size="lg">
                                    <Modal.Header closeButton>
                                        <Modal.Title>PCB 3D Model</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body id="3d-pcb" className='d-flex justify-content-center align-items-center'>
                                        <PCB_comp id="3d-pcb" />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="danger" onClick={handleClose}>
                                            Fermer
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </Col>
                        <Col md={4} >
                            <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                                <div className='img-div d-flex justify-content-center align-items-center'>
                                    <Image src={PCB} className='w-100' />
                                    {/* <BsZoomIn className='zoom-icon' /> */}
                                </div>

                            </Zoom>
                        </Col>
                    </Row>
                </div>
                <h2 id="description" className='text-gray titre'>Revue générale</h2>
                <p className="text-white">Dans l'ensemble, le module "Smart device" est l'un de mes préférés de l'année, principalement
                    parce qu'il m'a permis de suivre l'ensemble du processus de création d'un capteur, du dépôt de nanoparticules à la
                    conception de circuits analogiques et la PCB ce qui ce qui a renforcé mes compétences dans le hardware, développer
                    des application pour interagir entre capteur et microcontrôleur ce qui à améliorer mes softskills, enfin acquérir
                    une nouvelle compétences, la couche du middleware par la configuration d'un module de communication en entre un appareils
                    et un serveur avec le protocole LoRaWAN</p>
            </Container>
        </div>
    );
};

export default Smart_device;