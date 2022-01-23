import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';

import './BigData.css'

import BigDataLogo from '../../assets/BigDataLogo.jpg'

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
                    Nous avons implémenté la notion d'ontologie pour décrire des phénomènes métrologiques avec le logiciel de raisonnement
                    Protégé. Puis nous avons manipulé une ontologie dans un code source pour construire une application sémantique en JAVA
                    avec le framework Apache Jena.
                </p>
            </Container>

        </div>
    );
};

export default BigData;