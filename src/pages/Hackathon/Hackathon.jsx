import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom'
import { Player } from 'video-react'


import 'video-react/dist/video-react.css';
import './Hackathon.css'

import Hackathon_logo from '../../assets/hackathon_logo.png'
import om2m from '../../assets/Om2m.png'
import tech from '../../assets/hackathon_tech.png'

import video from '../../assets/video/hackathon_final.mp4'
import AJATA from '../../assets/AJATA.jpg'

const Hackathon = () => {
    return (
        <div className='hackathon'>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card className="header-card pt-3 card mt-5">
                        <Card.Img variant="top" src={Hackathon_logo} className='w-50 rounded mx-auto d-block' />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2 sous-titre'>Hackathon</h2>
                            <hr />
                            <Card.Text className='text-gray'>
                                Hackathon 2021-2022 concours international sur le domaine de l’IoT organisé par KETI
                                (Koerea Electronics Technology Institute), l'ETSI et le comité de normalisation OneM2M pour promouvoir la
                                plateforme middleware OM2M
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2 id="description" className='text-gray titre'>Description</h2>
                <Row>
                    <Col md={6} className='d-flex align-items-center'>
                        <p className="text-white">
                            Le Hackaton de l'INSA Toulouse a eu lieu du 30 septembre au 13 novembre organisé et géré par KETI
                            (Korea Eletronics Technology Institute) et ETSI (European Telecommunication Standards Institute). <br />
                            Centré sur les objets connectés et la norme OneM2M pour la couche middleware, il a permis de faire émerger
                            les meilleures idées innovantes et de développer des solutions IoT capable de répondre à des enjeux sociaux
                            et/ou environnementaux.
                            puis présenter le projet devant un jury d'experts international. <br /> <br />
                            Pour réaliser ce Hackathon, nous avons réalisé en parallele une série de recherches en autonomie sur la plate-forme de communication open
                            source OM2M. Toute la documentation et les ressources étaient disponibles sur le Mooc,
                            en particulier les cours sur Openclasseroom qui étaient bien détaillés. <br /> <br />
                            Il s'agissait en effet d'une compétition internationale de plusieurs équipes provenant de diverses universités
                            et écoles d'ingénieurs du monde entier. La récompense des huit meilleures équipes était entre 1 million ₩ à 3
                            millions ₩ <br /> <br />
                            La première étape consistait de former les groupes. L'organisation des groupes était de constituée des groupe de 5 personnes
                            de différentes spécialité. nous étions 2 du département électronique, 1 master IoT et 2 du département informatique. <br /> <br />
                        </p>
                    </Col>
                    <Col md={6} className='d-flex align-items-center'>
                        <img src={om2m} alt="om2m" className='w-100' />
                    </Col>
                    <p className="text-white">
                        Notre idée est de pouvoir aider les cyclistes à résoudre le problème des routes dangereuses qu'ils rencontrent chaque jour
                        grâce à une interface IoT qui pourrait identifier les zones dangereuses, car de nombreuses villes en France sont mal
                        équipées en infrastructures cyclables et ne sont donc pas en mesure de fournir un environnement sûr pour les cyclistes.
                        Chaque année en France, plus de 200 morts et 1500 blessés sont le résultat d'accidents de vélo, selon l'IFSTTAR.
                        <br /> <br />
                        Notre solution consiste mettre un ensemble de dispositifs embarqués dans chaque vélo qui collectent le trafic
                        routier en mesurant la vitesse des conducteurs circulant à côté des vélos pour définir les zones dangereuses, et
                        communiquent l'ensemble des données sur un serveur avec le porotcol OM2M.
                    </p>
                </Row>
                <h2 className="text-orange titre">Contribution personnelle</h2>
                <p className="text-white">
                    La durée de réalisation du projet était d'environ un mois, ce qui était une courte période de temps pour réaliser
                    le projet. La gestion du temps était donc le principal enjeu. Nous avons divisé le travail en deux parties parallèles
                    selon la spécialité de chaque membre du groupe. La première partie concernait le hardware, donc toute la gestion des
                    capteurs et microcontrôleur, et la seconde partie concernait le logiciel, donc la gestion du serveur et la
                    communication OM2M. <br />
                    Venant du département des systèmes embarqués, j'étais en charge de la partie hardware, de la configuration du capteur,
                    la gestion microcontrôleur et de l'implémentation du système permettant de détecter la vitesse des véhicules et d'envoyer les données via OM2M.
                    <br />Venant du département des systèmes embarqués, j'étais en charge de la partie hardware, de la configuration des capteurs,
                    de la gestion du microcontrôleur et de l'implémentation du système permettant de détecter la vitesse des véhicules et
                    d'envoyer les données via OM2M.
                    A la fin, chaque membre du groupe a placé sa partie sur le site Hacksert.io, édité ses diapositives de présentation et
                    enregistré une courte vidéo de la démonstration.
                </p>
                <h2 className="text-orange titre">Résultats</h2>
                <Row>
                    <Col md={3}>
                        <Zoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <img src={AJATA} alt="AJATA" className='w-100' />
                        </Zoom>
                    </Col>
                    <Col md={9} className='d-flex align-items-center'>
                        <p className="text-white">
                            A la fin de cette compétition, notre système était capable de récupérer les données des capteurs, de calculer
                            la vitesse des objets et d'envoyer les données au serveur.
                            L'utilisateur pouvait ouvrir sa page web personnelle dans le serveur local, voir les zones dangereuses sur une carte et
                            définir les zones importantes à déployer sur internet.
                            Nous avons été récompensés par les organisateurs et avons reçu un "Encouragement Award"
                        </p>
                    </Col>
                </Row>

                <h2 id="technique" className='text-gray titre'>Partie Technique</h2>
                <Row>
                    <Col md={6}>

                    </Col>
                    <Col md={6}>
                        <img src={tech} alt="AJATA" className='w-100' />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Hackathon;