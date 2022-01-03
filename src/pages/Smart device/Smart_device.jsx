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
            <Container fluid={true} >
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
                <h2 id="discroption" className='text-orange titre'>Description</h2>
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
                                        <th>2,5H</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <p className="text-white">
                            <br />
                            Le but ce module est de s’introduire dans le monde des objets connecté et de réaliser un projet sur lequel on
                            introduit un capteur gaz fabriqué à l’AIME, concevoir un système électronique capable de commander le capteur,
                            et communiqué l'ensemble des données collecté vers un serveur via le protocole de communication LoRA/LoRAWAN
                        </p>
                    </Col>
                </Row>
                <animated.h2 style={props} className="text-orange titre">Fabrication et intégration de capteurs nanotechnologiques (AIME)</animated.h2>
                <p className="text-white">Lors de notre stage à l’atelier Interuniversitaire Micro-nano Électronique (AIME) nous avons réalisé un capteur
                    chimique à l’Oxyde de Tungstène <Latex>{"${WO_3}$"}</Latex> de type semi-conducteur puis de l’évaluer sous
                    atmosphère gazeuse contrôlée pour en fournir la datasheet. <br /> Le procédé se décompose alors en 4
                    étapes : <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Elaboration du circuit intégré <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Synthèse des nanoparticules de <Latex>{"${WO_3}$"}</Latex> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• le dépot de la synthèse sur la puce <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;• Caractérisation électrique du capteur sous atmosphère contrôlée <br />
                    Les capteurs chimiques ont plusieurs avantages notamment leur faible consommation d’énergie et coût. Par contre leur principal
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
                            <p className='text-white'>La puce fabriquée est formée de 4 composants: <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Une résistance en aluminium pour mesurer la température de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Une résistance en polysilicium pour chauffer la surface de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;• Deux peignes interdigités formant deux condensateurs et qui deviendront des résistances
                                apèrs de le dépot du <Latex>{"${WO_3}$"}</Latex> <br /> <br />
                                Le procédé pour réaliser le circuit intégré du capteur du gaz: <br />
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
                                    Après la préparation de la synthèse <Latex>{"$WO_3$"}</Latex> à partir de l'hydrolyse et la condensation du <Latex>{"$Na_2WO_4$"}</Latex>,
                                    on récupère une solution jaune d’oxyde de tungstène, on recuit la solution au four à
                                    180°C pendants une heure laissant la croissance des nanotiges du <Latex>{"$WO_3$"}</Latex>.
                                    <br />
                                    On dépose une goutte de la synthèse WO3 sur le circuit intégré, ensuite on applique
                                    le phénomène du diélectrophorèse en polarisant les électrodes du capteur avec signal alternatif sinusoïdal
                                    à 100kHz et une amplitude de 10Vpp. Les nanotiges du WO3 s’accrochent sur les électrodes formant une résistance
                                    réactive à la concentration d’un gaz spécifique.
                                    <br />
                                    A la fin nous avons appliqué des tests de performance du capteur sur des environnements de gaz différent
                                    (ammoniac <Latex>{"$NH_3$"}</Latex>, éthanole <Latex>{"$C_2H_6O$"}</Latex> à 1000ppm), et réalisé une datasheet disponible en téléchargement
                                    ci-dessous.
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
                    <animated.h2 style={props} className="text-orange MOSH">Microcontrollers and Open-Source
                        Hardware, Embedded IA (Ms&OSH)
                    </animated.h2>
                    <p className="text-white">
                        Dans cette matière, nous avons travaillé sur du Open-Source hardware, l'ensemble des composants qui constituent un objet
                        connecté (microcontrôleur, capteur, actionneur et modules de communication). Nous avons suivi des cours sur
                        l’introduction du KiCAD pour la conception des circuits électroniques, une présentation de la syntaxe du langage de
                        programmation et le framework de développement Arduino, et des éléments d'interfaçage Arduino/Processing et Android.
                        <br />

                        De mon parcours en système embarqué, je ne trouvais pas de difficulté sur l'avancement des tâches.
                        C’est pour cette raison que j’ai décidé avec mon groupe de travailler en autonomie sur le projet. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;• Nous avons étudié l'ensemble des fonctionnalités de notre système. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;• définir le microcontrôleur qui répond au besoin du système. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;• et concevoir les symboles et footprints de nos composants sur KiCAD. <br />
                        La partie qui m’était nouvelle et plus intéressante c’était sur le module de communication LoRA (RN2483), j’ai appris à configurer
                        le module sur un ESP32 et communiquer les données en radio ou à travers une Gateway vers un serveur TTN.

                    </p>

                    <animated.h2 style={props} className="text-orange titre">Introduction aux capteurs</animated.h2>


                    <h4 className='text-light-gray'>Mon Rôle</h4>
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>
                                Le projet a été réalisé en deux étapes : <br />
                                Tout d’abord, mon rôle était de concevoir le schéma électronique.
                                Le capteur de gaz étant une résistance sensible à la concentration du gaz et elle est de l’ordre
                                des gigaohms, un diviseur de tension ne serait pas efficace pour que le convertisseur Analogique
                                Numérique (ADC) du microcontrôleur puisse lire les données. On a donc utilisé un amplificateur
                                opérationnel (LTC1050) avec un faible offset pour amplifier le courant passant par le capteur
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
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>
                                <br />
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
                                de la résistance poly-silicium, le courant traversant va générer une chaleur qu’il faut là commander.
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
                                pour déclencher une interruption de la présence d’un certain gaz.
                                <Latex>{"$V_-$"}</Latex> sera la tension du capteur amplifié.
                                À l’état initial le <Latex>{"$V_- > V_+$"}</Latex>, on a un état 0 à la sortie du comparateur.
                                À la présence d’un gaz, la tension du capteur chute <Latex>{"$V_- < V_+$"}</Latex> et l’état du comparateur
                                est à 1 le microcontrôleur capture le front montant et déclenche l'interruption. <br /> <br />
                                Enfin nous avons développé toutes les fonctionnalités pour traiter les données du capteur
                                de gaz sur un microcontrôleur ESP32 et configurer le module LoRA (RN2483) pour communiquer
                                le système avec les serveurs de “The things Network” <br />
                                Le tout se trouve sur Github&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            </Container>
        </div>
    );
};

export default Smart_device;