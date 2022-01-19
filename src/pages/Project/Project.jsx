import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import ImageZoom from 'react-medium-image-zoom';

import './Project.css'

import project_logo from '../../assets/Innovation_p.png'
import scfc from '../../assets/SCFC.png'
import react_logo from '../../assets/react.png'
import gif from '../../assets/gif/gif.gif'
import ip5305 from '../../assets/IP5305C.png'
import dynamo from '../../assets/dynamo.JPG'
import db from '../../assets/db.png'

const Project = () => {
    return (
        <div className='Project'>
            <div className="d-flex justify-content-center">
                <Card className="header-card pt-3 card mt-5">
                    <Card.Img variant="top" src={project_logo} className=' rounded mx-auto d-block' style={{ width: '30%' }} />
                    <Card.Body className='text-center'>
                        <h2 className='text-orange h2 sous-titre'>Innovative Project</h2>
                        <hr />
                        <Card.Text className='text-gray'>
                            Le projet le plus important de tout le semestre de l'ISS. Il rassemble toutes les compétences acquises
                            tout au long de la formation en termes de compétences techniques, de gestion d'équipe et présentation du projet.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <h2 id="description" className='text-gray titre'>Description</h2>
            <p className="text-white">
                Le module "Projet innovant" se compose de trois cours essentiels qui se déroulent tout au long du semestre. <br />
                Les cours d'anglais sont liés au projet innovant avec le développement de la présentation des compétences de pitch et
                Le portfolio est ce site web, qui rassemble mes expériences et les compétences acquises pendant l'année.
            </p>
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th style={{ borderTopLeftRadius: "1em" }}>Innovative project</th>
                        <th style={{ borderTopRightRadius: "1em" }}>Missions et Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Projet intégrateur</th>
                        <th>
                            Développement d'un projet lié à l'IOT, proposé par une demande spécifique d'une entreprise ou une idée
                            d'étudiant ou proposé et supervisé par un enseignant.
                            Le projet doit inclure les 4 couches principales : hardaware, software, middleware et application.
                        </th>
                    </tr>
                    <tr>
                        <th>Anglais</th>
                        <th>
                            En lien avec le projet innovant, les cours d'anglais sont des préparation pour la présentation du projet intégrateur
                        </th>
                    </tr>
                    <tr>
                        <th style={{ borderBottomLeftRadius: "0.5em" }}>Portfolio</th>
                        <th style={{ borderBottomRightRadius: "0.5em" }}>
                            Un document résumant l'ensembles des expériences de 5ISS, avec une partie descriptive reprenant les expérimentations
                            les plus importantes de l'année, une partie technique se concentrant sur les défis techniques de chaque classe,
                            et une partie analytique discutant des compétences acquises et de la perception subjective de la qualité de la
                            formation.
                        </th>
                    </tr>
                </tbody>
            </Table>
            <h2 className="text-orange sous-titre">Portfolio</h2>
            <Row>
                <Col md={4} className="d-flex justify-content-center">
                    <img src={react_logo} alt="react_logo" className="w-50" />
                </Col>
                <Col md={8} className="d-flex align-items-center">
                    <p className="text-white">
                        Le principal défi est bien sûr d'écrire de manière autonome le contenu du portfolio. J'ai choisi de construire
                        un site web dans un premier temps pour avoir un portfolio vraiment flexible, où l'on pourrait naviguer clairement
                        et facilement entre toutes les pièces qui sont mises ensemble. Dans un deuxième temps, j'ai voulu développer
                        mes compétences en développement web et j'ai choisi de développer ce site en React, un des principaux frameworks
                        de développement web utilisés.
                    </p>
                </Col>
            </Row>
            <h2 className="text-orange sous-titre">English</h2>
            <p className="text-white">
                L'anglais a été important pendant le semestre SSI, et c'est la langue appliquée dans presque tous les cours.
                L'objectif du cours dans la première partie était de présenter la revue du projet dans le contexte d'expliquer
                le projet intégrateur. La deuxième partie était de faire une première présentation du projet dans son intégralité afin
                de préparer la présentation du projet intégrateur devant le jury. Enfin, la dernière partie c'était la rédaction
                du rapport de projet qui explique les fonctionnalité global du projet intégrateur.
            </p>
            <h2 className='text-orange h2 sous-titre'>Projet Intégrateur</h2>
            <Row>
                <Col md={7}>
                    <p className="text-white">
                        Notre projet intégrateur pour le semestre ISS de 5ème année est issu de la poursuite de notre projet initial
                        "Safe City For Cyclists" du concours <NavLink className='text-orange fw-bold' tag={Link} to="/hackathon" target="_blank">Hackathon</NavLink> , organisé par le KETI (Korea Eletronics Technology Institute)
                        et l'ETSI (European Telecommunication Standards Institute).
                        L'objectif était d'améliorer toutes les ambiguïtés rencontrées lors du développement du projet du Hackathon,
                        ainsi que de l'adapter pour qu'il soit plus pratique, optimal et assure les quatre couches requises par l'unité
                        de formation donc :
                        <ul>
                            <li>La couche matérielle, le circuit électronique et le système d'alimentation.</li>
                            <li>La couche logicielle embarquée, la configuration des microcontrôleurs et la gestion des capteurs.</li>
                            <li>la couche middleware, qui permet le transfert des données et la communication avec la gateway.</li>
                            <li>la couche application, le back end qui permet de gérer les requêtes et de protéger les données. le front
                                end qui sera l'interface graphique de notre système et qui sera destiné à l'utilisateur.</li>
                        </ul>
                    </p>
                </Col>
                <Col ms={5}>
                    <img src={scfc} alt="scfc" className='w-100' />
                </Col>
            </Row>
            <h2 className="text-orange titre">Contribution personnelle</h2>
            <p className="text-white text-justify">
                Ayant une formation en électronique, automatisme et systèmes embarqués, les tâches qui m'ont été confiées pour le projet
                intégrateur portaient sur les parties hardware et logiciel embarqué. J'ai continué l'amélioration de la bibliothèque Speed
                du projet Hackathon avec un autre membre de l'équipe qui a suivi la même formation. Ensuite, pour gagner plus d'efficacité,
                j'ai commencé à concevoir le circuit électronique pour alimenter l'ensemble du système avec une batterie.
                Enfin pour optimiser la consommation d'énergie j'ai ajouté une dynamo à la roue arrière du vélo qui génère un certain courant
                et vient ensuite réduire la consommation de la batterie et optimiser son autonomie.
            </p>
            <h2 id="technique" className='text-gray titre'>Partie Technique</h2>
            <Row>
                <Col md={8} className="d-flex align-items-center">
                    <p className="text-white text-wrap">
                        Comme il était dit précédemment le projet intégrateur est la poursuit du projet hackathon, sauf que nous avons repris toutes
                        les parties qui n'étaient pas pratiques, notamment la partie OM2M.Déployer des serveurs MN-CSE pour chaque foyer n'est pas
                        très optimal pour un tel usage. Nous avons donc dû changer l'architecture et remplacer les nœuds OM2M par un seul serveur
                        centralisé puis connecter le système via BLE (Bluetooth Low Energy) avec un téléphone disposant de données cellulaires.
                        Cependant, notre système peut communiquer avec le serveur à tout moment ou stocker les données dans le téléphone.
                        Par conséquent, nous éliminons l'encombrement des données sur la mémoire STACK du microcontrôleur.
                        Nous avons changé le microcontrôleur ESP8266 pour un ESP32 car il possède un module BLE intégré et il est plus
                        puissant en termes de calcul ce qui est intéressant pour les capteurs de distance. <br />
                        Pour le capteur de distance, nous avons rencontré des problèmes avec la portée du capteur à ultrasons.
                        Nous l'avons donc remplacé par un LIDAR qui mesure jusqu'à 8m avec une réflectivité de 90% et 2,5m avec
                        une réflectivité de 20%, dans le pire des cas c'est suffisant. Mais nous l'avons limité à 3m. Le lidar
                        communique en I2C, ce qui est plus intéressant que les ultrasons.
                        <br /> <br />
                        Pour la partie de l'alimentation du système, je devais trouver un moyen pour booster la batterie lithium-ion à 5V,
                        la charger avec un chargeur standard 5V et la protéger contre la surcharge.  J'ai donc utilisé le IP5305 qui fournit
                        ces caractéristiques :
                        <ul>
                            <li>Chargeur de batterie à 5V d'entrée</li>
                            <li>Convertisseur boost synchrone à 90% d'efficacité</li>
                            <li>Indicateur d'état de la batterie à 4 LED</li>
                            <li>Une Charge intelligente pour couper le système lorsque la consommation est inférieure à 100 uA</li>
                        </ul>
                        Pour optimiser davantage la batterie j'ai ajouté un dynamo qui permet de générer un courant pour compenser
                        la consommation de la batterie ainsi, on optimise l'autonomie de la batterie. La difficulté du système est
                        de stabiliser la sortie de la dynamo à 5V donc j'ai redressé le signal AC de la dynamo, puis un régulateur
                        linéaire de 5V (LM317) vient stabiliser la sortie à la même tension que celle de la batterie du système.
                    </p>
                </Col>
                <Col md={4} className='d-flex flex-column justify-content-end'>
                    <img src={gif} alt="AJATA" className='w-100' />
                    {/* <ImageZoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)' className="justify-content-end">
                        <img src={ip5305} alt="ip5305" className='w-100 mt-5' />
                    </ImageZoom>
                    <ImageZoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)' className="justify-content-end">
                        <img src={dynamo} alt="dynamo" className='w-100 mt-5' />
                    </ImageZoom> */}
                    <ImageZoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)' className="justify-content-end">
                        <img src={db} alt="db" className='w-100 mt-5' />
                    </ImageZoom>
                </Col>
            </Row>
            <h2 id="description" className='text-gray titre'>Partie analytique</h2>
            <p className="text-white">
                Pour ce module, le projet innovant résume vraiment une grande partie de l'année pour moi, je me suis vraiment investi dans
                le projet innovant, car c'est un projet qui a commencé avec une idée simple et qui s'est terminé avec un prototype sur
                un vélo que nous avons expérimenté. Le projet en lui-même m'a beaucoup intéressé car il passait par tous les points d'un
                vrai projet d'entreprise, concevoir un circuit électronique, puis embarquer le logiciel pour gérer le système, communiquer
                toutes les données avec les protocoles des objets connectés, et enfin développer une application qui sera l'interface
                entre la machine et l'utilisateur. Bien que le plus grand avantage pour ce projet a été la décision de garder le même
                projet du Hackathon. <br />
                Les cours d'anglais ont été très importants, ils m'ont donné beaucoup plus de confiance et m'ont permis de m'exprimer et de
                présenter le projet avec la langue la plus employée, surtout dans le domaine de l'ingénierie.
                <br /> 
                {/* Enfin, le portfolio a été un véritable défi pour moi et une expérience très enrichissante. J'ai fait le choix de développer
                le portfolio en tant que site web avec le framework REACT en passant par toutes les phases, alors que je suis formé aux systèmes
                embarqués, mais cela ne m'a pas empêché d'investir beaucoup de temps pour finalement réussir à le faire. */}
            </p>
        </div>
    );
};

export default Project;