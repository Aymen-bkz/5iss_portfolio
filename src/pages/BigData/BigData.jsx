import React from 'react';
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap';

import './BigData.css'

import BigDataLogo from '../../assets/BigDataLogo.jpg'
import dataset from '../../assets/dataset_3.png'
import ImageZoom from 'react-medium-image-zoom';

import bigDataPdf from '../../assets/rapports/TP_DATA.pdf'
import TP_ISS_exemple_rapport from '../../assets/rapports/TP_ISS_exemple_rapport.pdf'
import SkillMatrixBigData from '../../components/SkillMatrix/SkillMatrixBigData';

const BigData = () => {
    return (
        <div className='big-data'>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card className="header-card pt-3 card mt-5">
                        <Card.Img variant="top" src={BigDataLogo} className='rounded mx-auto d-block' style={{ width: "35%" }} />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2 sous-titre'>Analysis & Data processing</h2>
                            <hr />
                            <Card.Text className='text-gray fs-6' >
                                De plus en plus de dispositifs et d'objets sont connectés à l'internet. Ces objets connectés génèrent
                                des données, qui peuvent être analysées pour dégager des tendances et des informations à des fins diverses.
                                C'est pourquoi le Big Data et l'Internet des objets (IoT) sont étroitement liés.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <h2 id="description" className='text-gray titre'>Description</h2>
                <p className="text-white">
                    Le module Analyse & Traitement des données regroupe trois matières. <br />
                    Les deux premiers cours étudient les données massives des objets connectés de manière innovante,
                    avec l'analyse des big data et le web sémantique pour l'IoT. Le troisième est un cours plus général
                    sur la pratique du software engineering .
                </p>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th style={{ borderTopLeftRadius: "1em" }}>Analysis & Data processing</th>
                            <th style={{ borderTopRightRadius: "1em" }}>Missions et Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Big data</th>
                            <th>L'analyse des données se concentre sur les bonnes pratiques de trouver la façon de représenter un jeux de
                                données sous forme de clustering
                            </th>
                        </tr>
                        <tr>
                            <th>Web sémantique</th>
                            <th>Le cours passe en revue les principaux concepts du web sémantique pour faciliter l'exploitation de données
                                structurées, donner du sens aux contenus, en permettant leur interprétation par des machines et notamment
                                la notion d'ontologie,
                            </th>
                        </tr>
                        <tr>
                            <th style={{ borderBottomLeftRadius: "0.5em" }}>Software Engineering</th>
                            <th style={{ borderBottomRightRadius: "0.5em" }}>
                                Le cours consiste à améliorer les processus et à réduire leur taux d'échec avec la méthode agile grâce
                                à la planification des tâches via un système de rédaction et de gestion de projet.
                            </th>
                        </tr>
                    </tbody>
                </Table>
                <h2 className='text-orange h2 sous-titre'>Big data</h2>
                <p className="text-white">
                    L'analyse et traitement des données se décompose en une séquence de cours magistraux et 3 travaux pratiques. <br />
                    Le but des travaux pratiques est de comparer trois (03) méthodes de clustering les plus très répandues.
                    <ul>
                        <li>K-Means</li>
                        <li>clustering hiérarchique (agglomératif)</li>
                        <li>DBSCAN</li>
                    </ul>
                    Chacune de ces méthodes possède un algorithme différent et diverses propriétés qui permettent de la rendre plus ou moins
                    adéquate à utiliser en fonction du jeu de données que l'on possède.
                </p>
                <h2 className='text-orange h2 sous-titre'>web sémantique</h2>
                <p className="text-white">
                    Ce cours était composé de 2 travaux pratiques. Le but de ces travaux pratiques était de nous initier au web sémantique.
                    Nous avons implémenté la notion d'ontologie pour décrire des phénomènes métrologiques avec le logiciel
                    Protégé. Puis nous avons manipulé une ontologie dans un code source pour construire une application sémantique en JAVA
                    avec le framework Apache Jena.
                </p>
                <h2 className='text-orange h2 sous-titre'>Software Engineering</h2>
                <p className="text-white">
                    L'objectif de ce cours était de nous donner un aperçu des phases de développement d'un logiciel, ainsi que des
                    principales méthodes de gestion de projet. La principale méthode que nous avons eu à appliquer est la méthode Agile.
                    Nous avons utilisé l'outil "JIRA Software" dans le cadre du projet d'architecture orientée service. Il est vraiment
                    complet et plein de fonctionnalités pour l'annotation des tâches et la planification des sprint. Au final,
                    nous avons réussi à en tirer le meilleur parti et la planification du projet SOA a été respectée.
                    Il est également important de noter que nous avons également utilisé Agile pour le hackathon et notre
                    projet innovant tout au long du semestre, en utilisant Trello pour gérer les tâches.
                </p>
                <h2 id="description" className='text-gray titre'>Partie technique</h2>
                <h2 className='text-orange h2 sous-titre'>Big data</h2>
                <Row>
                    <Col lg={7}>
                        <p className="text-white">
                            Au cours des trois sessions pratiques, nous avons pratiqué les trois méthodes de clustering les plus
                            populaires de la bibliothèque scikit-learn en Python. K-Means, Agglomerative Clustering, et DBSCAN.
                            Chaque méthode possède un algorithme différent et diverses propriétés qui la rendent plus ou moins
                            appropriée à l'utilisation en fonction du jeu de données dont nous disposons. Le défi a été de choisir
                            pour chaque méthode, un ensemble de jeux de données avec des particularités diverses
                            (granularité, concave/convexe, nombre de clusters, etc.), puis de faire une analyse à l'aide de
                            la documentation des algorithmes en question pour déterminer les forces et les limites de chaque méthode.
                            Pour évaluer nos clusters, nous avons utilisé deux méthodes de mesure spécifiques, à savoir
                            : L'inertie et le coefficient de silhouette. L'inertie est une métrique qui est utilisée pour
                            déterminer une échelle appropriée pour le nombre de clusters qui devrait être choisi pour les algorithmes
                            qui prennent le nombre de clusters comme entrée. Nous appliquons ensuite la méthode du coude sur le coefficient
                            de silhouette pour déterminer cette plage.
                        </p>
                    </Col>
                    <Col lg={5} className=''>
                        <ImageZoom zoomMargin={200} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mt-3'>
                                <Image src={dataset} className='w-75 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                        <Button href={bigDataPdf} target="Blank_" variant='secondary' className="mt-5 mb-5 d-block mx-auto w-75">Rapport Big Data</Button>
                    </Col>
                </Row>
                <h2 className='text-orange h2 sous-titre'>Web sémantique</h2>
                <p className="text-white">
                    Durant la première partie des travaux pratiques sur le web sémantique, nous avons eu l'occasion de manipuler les principaux aspects
                    de la notion d'ontologie et de montrer les déductions faites par le raisonneur protégé.
                    Le contexte était de développer une application météorologique intelligente. Tout d'abord, nous avons conçu une ontologie
                    légère en créant des classes avec des propriétés. Ensuite, nous avons peuplé l'ontologie en reliant des individus avec
                    les différentes propriétés.
                    Puis nous sommes passés à l'ontologie lourde pour exprimer des relations plus complexes avec des syntaxes Munchester
                    qui permettent d'écrire des relations plus avancées et d'appliquer des caractéristiques spécifiques pour
                    chaque propriété. <br />
                    Dans la deuxième partie, nous avons développé une application avec le Framework Apache Jena avec des données de capteurs
                    de température collectées dans la ville d'Aarhus au Danemark.
                </p>
                <Button href={TP_ISS_exemple_rapport} target="Blank_" variant='secondary' className="mt-5 mb-5 d-block mx-auto w-25">Rapport Web sémantique</Button>
                <h2 id="description" className='text-gray titre'>Partie Analytique</h2>
                <p className="text-white">
                    Ce module comportait des cours de traitement de données très courants impliquant différentes compétences.
                    Il était très axé sur les compétences en matière de RI. C'était donc une façon pour moi de me familiariser avec
                    un ensemble de compétences totalement différent du mien.
                    Pour le module Traitement des données sémantiques, j'ai réussi à aborder les tâches sans grande difficulté sur
                    la première partie du TP. J'ai pu créer une ontologie avec Protegé et une base de connaissances. Par contre
                    j'ai rencontrer des difficulté sur le développement du l'application avec le Framework Apache Jena.
                    Le cours Traitement et analyse des données m'a permis d'explorer un jeu de données, et de l'exploiter en
                    utilisant plusieurs méthodes. Les travaux pratiques étaient bien construits, nous permettant de découvrir
                    les méthodes de base de l'analyse en cluster et de définir les meilleurs algorithmes pour trouver les paramètres
                    optimaux du clustering, puis de les utiliser sur des jeux de données réels.
                    Pour "Software Engineering", je connaissais déjà la plupart des méthodes présentées et j'avais beaucoup
                    d'expérience avec la méthode Agile. Ma formation INSA et mon expérience professionnelle m'ont permis d'atteindre
                    toutes les exigences.
                </p>
                <SkillMatrixBigData />
            </Container>
        </div>
    );
};

export default BigData;