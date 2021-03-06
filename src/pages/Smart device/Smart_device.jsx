import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, Card, Col, Container, Image, Modal, Row, Table } from 'react-bootstrap';
import Latex from 'react-latex'
import { BsClipboardData, BsGithub } from 'react-icons/bs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Carousel } from 'react-responsive-carousel';
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
import SkillMatrixSmartDevice from '../../components/SkillMatrix/SkillMatrixSmartDevice';


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
                        <Card.Img variant="top" src={card_head} className='rounded mx-auto d-block w-25' />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2 sous-titre'>Smart Device</h2>
                            <hr />
                            <Card.Text className='text-gray'>
                                Les dispositifs intelligents bas??s sur des capteurs sont partout dans notre vie quotidienne. Dans ce cours,
                                nous suivrons le processus complet de cr??ation d'un capteur de gaz intelligent, depuis le d??p??t de nanoparticules
                                jusqu'?? l'acquisition des donn??es sur un microcontr??leur et la communication LoRa.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2 id="description" className='text-gray titre'>Description</h2>
                <Row>
                    <Col sm={12}>
                        <p className='text-white intro'>
                            Le  module "Smart Devices" regroupe quatre mati??res qui passent en revue les diff??rentes ??tapes de la
                            fabrication d'un capteur de gaz ?? la salle blanche de l'Atelier Interuniversitaire Micro-nano Electronique (AIME).
                        </p>
                        <br />
                        <p></p>
                        <div className=''>
                            <Table striped hover responsive>
                                <thead>
                                    <tr>
                                        <th style={{ borderTopLeftRadius: "1em" }}>Smart Device</th>
                                        <th style={{ borderTopRightRadius: "1em" }}>Missions et Context</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th >fabrication et int??gration de capteurs nanotechnologiques (AIME)</th>
                                        <th >Une exp??rience compl??te dans la salle blanche de l'AIME d'une semaine qui consiste aux diff??rents
                                            modules d'une demi-journ??e pendant lesquels nous avons pu superviser et manipuler les diff??rents
                                            processus impliqu??s dans la fabrication d'un capteur ?? nanoparticules. L'objectif final ??tait de
                                            fabriquer un capteur de gaz ?? partir de nanoparticules de tungst??ne, qui exprime une variation de
                                            r??sistance lors de la d??tection de gaz sp??cifiques.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th><span>Microcontrollers and Open-Source Hardware, Embedded IA (Ms&OSH)</span></th>
                                        <th>Projet r??alis?? en groupe de trois, consistant ?? utiliser tous les composants que nous avons construits
                                            pr??c??demment : le capteur de gaz et concevoir une PCB avec le circuit de traitement du signal, un
                                            module de communication LoRa/LoRaWAN et un ESP32 pour transformer notre capteur en capteur
                                            intelligent, envoyant des donn??es vers le un serveur TTN.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Introduction aux capteurs</th>
                                        <th>Cours th??oriques et travaux pratiques sur les concepts physiques des diff??rents types de
                                            capteurs et sur la fa??on de cr??er une fiche technique de capteur. Cela nous aidera ??
                                            construire la fiche technique de notre capteur de gaz.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style={{ borderBottomLeftRadius: "0.5em" }}>Laboratoires d'??lectronique analogique</th>
                                        <th style={{ borderBottomRightRadius: "0.5em" }}>Des travaux pratiques destin??s ?? nous aider ?? concevoir le circuit analogique pour exploiter
                                            les valeurs de sortie de notre capteur  par le Convertisseur Analogique Num??rique de notre
                                            microcontr??leur.
                                        </th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <p className="text-white">
                            Apr??s avoir r??alis?? avec mon groupe le capteur de gaz, nous avons divis?? les t??ches efficacement pour la partie
                            Ms&OSH. Je me suis naturellement charg?? de la conception du circuit ??lectronique puis du design et du routage du circuit
                            imprim?? correspondant. En effet, venant de la fili??re d'??lectronique automatique, je poss??de les comp??tences n??cessaires
                            pour prendre en main ces t??ches. De plus, mon stage de quatri??me ann??e ax?? dans la cr??ation de PCB m'a permis d'acquerir
                            de l'exp??rience et d??velopper des comp??tences dans le hardware.
                        </p>
                    </Col>
                </Row>
                <h2 id="description" className='text-gray titre'>Partie Technique</h2>
                <animated.h2 style={props} className="text-orange sous-titre">Fabrication et int??gration de capteurs nanotechnologiques (AIME)</animated.h2>
                <p className="text-white">
                    La premi??re exp??rience que nous avons eue dans le cadre du module
                    "Smart Devices" a ??t?? le stage d'une semaine dans la salle blanche de l'AIME (Atelier Interuniversitaire Micro-nano Electronique).
                    L'objectif final ??tait de manipuler les diff??rents processus impliqu??s dans la fabrication d'un capteur de nanotige de tungstem <Latex>{"${WO_3}$"}</Latex>
                    qui exprime une variation de r??sistance lors de la d??tection de gaz sp??cifiques.
                    <br />
                    <br /> Le processus de fabrication est compos?? de 4 parties ??tapes : <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;??? Elaboration du circuit int??gr?? <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;??? Synth??se des nanoparticules de <Latex>{"${WO_3}$"}</Latex> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;??? le d??pot de la synth??se sur la puce <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;??? Caract??risation ??lectrique du capteur sous atmosph??re contr??l??e <br />
                    <br />
                    Les capteurs chimiques pr??sentent plusieurs avantages notamment leur faible consommation d?????nergie et co??t. Par contre leur principal
                    d??savantage se trouve ?? leurs s??lectivit??s, l???analyse d???un m??lange de gaz n??cessite plusieurs capteurs sensibles pour
                    chaque esp??ce gazeuse. </p>
                <br />
                <p>L'objectif est de </p>
                <div className="Row-sensor">
                    <Row>
                        <Col md={6} className='d-flex justify-content-center carousel-col mb-5'>
                            <Carousel showStatus={false} showThumbs={true} autoPlay={false} infiniteLoop>
                                <div>
                                    <img src={Sensor} alt="SDR1" className='w-75' />
                                </div>
                                <div>
                                    <img src={R_alu} alt="SDR2" className='w-75' />
                                </div>
                                <div>
                                    <img src={R_poly} alt="SDR1" className='w-75' />
                                </div>
                                <div>
                                    <img src={R_sens} alt="SDR2" className='w-75' />
                                </div>
                                <div>
                                    <img src={Assembly} alt="SDR1" className='w-75' />
                                </div>
                            </Carousel>
                            {/* <Carousel fade activeIndex={index} onSelect={handleSelect} interval={null} className='Sensor-carousel'>
                                <Carousel.Item >
                                    <Image src={Sensor} ></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Capteur de gaz</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={R_alu} ></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>R??sistance Aluminium</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={R_poly} ></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>R??sistance polysilicium dop?? N</h6>
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
                            </Carousel> */}
                        </Col>
                        <Col md={6} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>La puce du capteur estS form??e de 4 composants: <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Une r??sistance en aluminium pour mesurer la temp??rature de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Une r??sistance en polysilicium pour chauffer la surface de la puce <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Deux peignes interdigit??s formant deux condensateurs et qui deviendront des r??sistances
                                ap??rs de le d??pot du <Latex>{"${WO_3}$"}</Latex> <br /> <br />
                                Les ??tapes pour r??aliser le circuit int??gr?? du capteur du gaz: <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Oxydation de masquage (<Latex >{"$4500\\mathring{A}$"}</Latex>) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? D??pot du poly-silicium  (<Latex >{"$600nm$"}</Latex>) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Gravure du polysilicium  (Photogravure n??1) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? D??pot d'une couche d'oxyde sec <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Ouverture des contacts  (Photogravure n??2) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Gravure du m??tal  (Photogravure n??3) <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;??? Enfin l'assemblage de la puce dans un boitier TO-5-10 <br />

                            </p>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col md={6} className='d-flex justify-content-center align-items-center mb-4'>
                            <div className=''>
                                <p className='text-white'>
                                    La synth??se <Latex>{"$WO_3$"}</Latex> est produite ?? partir de l'hydrolyse et la condensation du <Latex>{"$Na_2WO_4$"}</Latex>,
                                    on r??cup??re une solution jaune d???oxyde de tungst??ne, on recuit la solution au four ??
                                    180??C pendants une heure laissant la croissance des nanotiges du <Latex>{"$WO_3$"}</Latex>.
                                    <br /> <br />
                                    On d??pose une goutte de la synth??se WO3 sur le circuit int??gr??, ensuite en appliquant le ph??nom??ne du di??lectrophor??se
                                    par la polarisation des ??lectrodes du capteur avec signal alternatif sinuso??dal ?? 100kHz et une amplitude de 10Vpp.
                                    Les nano-tiges du WO3 s???accrochent sur les ??lectrodes formant une r??sistance  r??active ?? la concentration du gaz de
                                    l'environnement.
                                    <br /> <br />
                                    A la fin du strage nous avons rassembl?? les donn??es de tous les capteurs. Avec les notions apprises au cours "Introduction aux capteurs"
                                    j'ai pu r??diger une fiche technique. <br />
                                    Vous pouvez trouver la fiche technique r??alis??e dans le lien ci-dessous : <br />

                                </p>
                                <br />
                                <Button className='btn-datasheet' href={datasheet} target="_blank"> Datasheet <BsClipboardData /> </Button>
                                {/* <button className='btn btn-datasheet' hred>Datasheet <BsClipboardData /></button> */}
                            </div>
                        </Col>
                        <Col md={6} className='d-flex justify-content-center carousel-col'>
                            <Carousel showStatus={false} showThumbs={true} autoPlay={false} infiniteLoop>
                                <div>
                                    <img src={DIE} alt="SDR1" className='w-75' />
                                </div>
                                <div>
                                    <img src={goute} alt="SDR2" className='w-75' />
                                </div>
                            </Carousel>
                            {/* <Carousel fade className='Sensor-carousel' interval={null}>
                                <Carousel.Item >
                                    <Image src={DIE} className='w-100'></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>Appliquation du ph??nom??ne DIE</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={goute} className='w-100'></Image>
                                    <Carousel.Caption>
                                        <h6 className='ref'>D??pot d'une g??ute du <Latex>{"$WO_3$"}</Latex></h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> */}
                        </Col>
                    </Row>
                    <animated.h2 style={props} className="text-orange MOSH sous-titre">Laboratoires d'??lectronique analogique</animated.h2>
                    <Row>
                        <Col md={8} className='d-flex justify-content-center align-items-center'>
                            <p className='text-white'>
                                Les laboratoires d'??lectronique analogique ??tait des travaux pratiques pour concevoir un circuit ??lectronique qui
                                serait capable de donn??es des valeur ??xploitable du capteur de gaz par le convertisseur Analogique
                                Num??rique du microcontr??leur.
                                Le capteur de gaz ??tant une r??sistance sensible ?? la concentration du gaz deplus il est de l???ordre
                                des gigaohms, un diviseur de tension ne serait pas efficace pour que le convertisseur Analogique
                                Num??rique (ADC) du microcontr??leur puisse lire les donn??es. On a donc utilis?? un amplificateur
                                op??rationnel (LTC1050) avec une faible tension offset pour amplifier le courant passant par le capteur
                                et filtrer le bruit. <br />
                                La valeur de la r??sistance du capteur: <br />
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
                    <animated.h2 style={props} className="text-orange sous-titre">Microcontrollers and Open-Source
                        Hardware, Embedded IA (Ms&OSH)
                    </animated.h2>
                    <p className="text-white">
                        Une fois le capteur est fabriqu??, Nous somme pass?? ?? la Conception du circuit ??lectronique,
                        Nous avions beaucoup de libert??, car nous pouvions choisir entre suivre les laboratoires dirig??s ou lancer le projet .
                        Avec mon ??quipe compos?? de AE et MSIOT nous somme d??cid?? d'avanc?? sur le projet en autonomoie.
                        <br /><br />
                        On a divis?? le travail en partie:
                    </p>

                    <Row>
                        <Col md={8} className='d-flex justify-content-center'>
                            <p className='text-white'>
                                <br />
                                La premi??re partie cot?? software, on a commenc?? par la configuration du module LoRa RN2482,
                                avec les instructions du constructeur. On avait r??ussi ?? ??tablir une communication radio
                                avec la couche physique entre deux module LoRa et transmettre de donn??es d'un capteur
                                de gaz Grove. Ensuite nous avons utilis?? la biblioth??que <span><a href="https://github.com/jpmeijers/RN2483-Arduino-Library">jpmeijers/RN2483-Arduino-Library</a> </span>
                                pour configurer le RN2483 pour ??tablir une communication avec un serveur TTN avec la couche MAC du module (LoRaWAN)

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
                                La deuxi??me partie cot?? hardware. En plus du circuit amplificateur, nous avons rajout?? une commande du
                                capteur du gaz et un comparateur pour d??clencher une interruption externe sur le microcontr??leur.
                                <br /> <br />
                                Le capteur de temp??rature a une r??sistance faible, un diviseur de tension suffi pour lire sa valeur avec la formule suivante: <br />
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
                                Notre syst??me est fonctionnel qu'?? partir de 200??C, il faudrait donc appliquer une tension aux bornes
                                de la r??sistance poly-silicium, le courant traversant g??n??re une chaleur qu???il faut l?? commander.
                                Une PWM 8 bits du microcontr??leur viens commander le transistor NPN de 0% ?? 100% (0 ?? 255), avec le capteur
                                de temp??rature on peut int??grer un correcteur num??rique PID pour corriger la commande.
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
                                Nous avons rajout?? un comparateur sur lequel on applique une tension de r??f??rence sur <Latex>{"$V_+$"}</Latex> qui repr??sente le seuil
                                pour d??clencher une interruption de la pr??sence d???un certain gaz.&nbsp;
                                <Latex>{"$V_-$"}</Latex> sera la tension du capteur amplifi??.
                                ?? l?????tat initial le <Latex>{"$V_- > V_+$"}</Latex>, on a un ??tat 0 ?? la sortie du comparateur.
                                ?? la pr??sence d???un gaz, la tension du capteur chute, <Latex>{"$V_- < V_+$"}</Latex> l?????tat du comparateur
                                passe ?? 1 le microcontr??leur capture le front montant et d??clenche l'interruption. <br /> <br />

                                L'int??gralit?? du code et sch??mas se trouve sur GitHub&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                <h2 id="description" className='text-gray titre'>Challenges rencontr??s</h2>
                <p className="text-white">
                    Lors de ce projet j'ai rencontr?? des difficult??s techniques principalement avec le module LoRa car je n'??tais pas
                    familier avec cette technologie.
                    Pour surmonter cette difficult??, je me suis document?? grace ?? la datasheet du module RN2483, et ai envoy?? des
                    commandes de base au module via un moniteur serie pour voir sa r??ponse. A force de faire des essais j'ai pu appr??hender
                    le fonctionnement global du loRa sur le framework Aduino.
                </p>
                <h2 id="description" className='text-gray titre'>Revue g??n??rale</h2>
                <p className="text-white">Dans l'ensemble, le module "Smart device" est l'un de mes modules pr??f??r??s de l'ann??e,
                    principalement parce qu'il m'a permis de suivre l'ensemble du processus de cr??ation d'un capteur de gaz, du d??p??t
                    de nanoparticules ?? la conception du circuit analogique et routage du PCB, ce qui a renforc?? mes comp??tences en
                    Hardware.
                    Le d??veloppement d'applications pour interagir entre capteurs et microcontr??leurs a am??lior?? mes comp??tences en softskills.
                    Enfin, j'ai acquis une nouvelle comp??tence, la couche middleware, en configurant un module de communication entre
                    les appareils et les serveurs avec le protocole LoRaWAN.
                </p>
                <h2 id="description" className='text-gray titre'>Partie Analytique</h2>
                <SkillMatrixSmartDevice />
            </Container>
        </div>
    );
};

export default Smart_device;