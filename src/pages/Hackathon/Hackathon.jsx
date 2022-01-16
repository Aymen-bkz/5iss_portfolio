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
                        <p className="text-white">
                            Tout d'abord, voici un petit résumé du projet :
                            Nous avons deux capteurs ultrason et un GPS Sim28 connectés à un ESP8622, le tout embarqué dans un vélo.
                            Le vélo collecte des informations sur le trafic routier et les stocke dans la mémoire RAM du microcontrôleur.
                            Une fois qu'il entre dans une zone où il peut se connecter avec un Wifi. Il envoie toutes les informations
                            au serveur MN-CSE (Middle Node - Common Service Entites) pour traiter et filtrer les données.
                            Toutes les informations sont accessibles depuis une page web sur les zones avec une carte. L'utilisateur
                            peut ensuite choisir de conserver les informations, trier les données pour protéger la confidentialité
                            ou les transmettre au serveur IN-CSE (Infrastructure Node - Common Service Entity). <br />
                            Pour notre test, nous avons installé le serveur MN-CSE sur un PC, l'IN-SCE sur un Raspberry et nous avons utilisé
                            un réseau local.

                            <br /> <br />
                            Ce projet a été un grand défi technique pour moi car j'ai dû coordonner les deux capteurs à ultrasons de
                            manière simultanée pour pouvoir mesurer la distance et calculer la vitesse du véhicule. J'ai rencontré
                            de nombreuses difficultés pour capturer la distance car si aucun objet n'était détecté par les deux capteurs
                            à ultrasons, ils généraient un retard sur le système. En revanche, j'ai pu écrire la librairie de vitesse.
                            Un autre problème concernait le GPS. L'ESP8266 ne pouvait pas lire les trames du GPS et les capteurs
                            ultrasoniques en même temps car la fonction de lecture de l'ESP8266 sur le port série du GPS attendait
                            d'avoir la trame complète, ce qui générait un grand retard et réduisait la fréquence à 5Hz, qui est
                            la fréquence d'envoi du GPS. <br /> <br />


                            Pour résoudre ce problème, j'ai dû faire la commuter entre le GPS et le capteur à ultrasons. Le système
                            commence à mesurer la vitesse dès que le GPS est relié aux signaux satellites. Si l'ultrason détecte une
                            vitesse élevée d'un véhicule, il stocke les données avec la position GPS dans une variable sous forme de
                            paquet JSON.
                            dès que le vélo dispose d'une connexion wifi, elle envoie tous les paquets de données JSON au serveur MN-CSE
                            avec des requetés POST.
                        </p>
                    </Col>
                    <Col md={6} >
                        <img src={tech} alt="AJATA" className='w-100 mt-2' />
                        <Player className="mt-5">
                            <source src={video} />
                        </Player>
                    </Col>
                </Row>
                <h2 id="description" className='text-gray titre'>Partie analytique</h2>
                <p className="text-white">
                    Hackaton a été une expérience formidable pour moi et l'un des projets les plus important du programme "Innovative Smart Systems".
                    Non seulement il a mobilisé de nouvelles compétences et connaissances, mais le délai et le calendrier étaient extrêmement serrés.
                    J'ai eu la chance d'avoir une équipe qui s'est beaucoup investie dans l'événement et qui était prête à remplir les tâches tout
                    au long de la compétition. <br />
                    Un événement aussi intense que celui-ci requiert de nombreuses compétences clés en matière d'ingénierie, à commencer par
                    la recherche d'une idée innovante, qui a été la partie la plus difficile, et surtout la faisabilité de la partie
                    technique comme la mesure de la vitesse d'un objet avec 2 capteurs à ultrasons. <br />
                    La principale conclusion que je tire de cette expérience est l'importance de la gestion du temps et la stratégie de
                    gestion est encore plus importante.
                    Grâce à une expérience comme celle-ci, je peux m'habituer à ces contraintes et mieux préparer et gérer des projets
                     pour ma future carrier professionnel.

                </p>
            </Container>
        </div>
    );
};

export default Hackathon;