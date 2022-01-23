import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import { FcInfo } from 'react-icons/fc'

import './SkillMatrix.css'

const SkillMatrixBigData = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='skills'>
            {/* <Button variant="secondary" onClick={handleShow}>
                <FcInfo></FcInfo>
            </Button>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="pop-up-title">Comment lire le tableau ?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pop-up">
                    <p class="mb-2">
                        Niveau de compétence:
                    </p>
                    <ul>
                        <li><b>AP</b> - 1 - niveau d'application : suivi des instructions ou des procédures </li>
                        <li><b>AN</b> - 2 - Niveau d'analyse : amélioration ou optimisation des solutions ou des propositions</li>
                        <li><b>M</b> - 3  - niveaux de contrôle : conception des programmes ou définition des spécifications</li>
                        <li><b>EX</b> - 4 - niveau d'expertise : définition d'orientations ou de stratégies</li>
                    </ul>
                </Modal.Body>
            </Modal> */}

            <Table striped hover responsive size='sm'>
                <thead>
                    <tr>
                        <th style={{ borderTopLeftRadius: "1em" }} className='text-center'>Les compétences</th>
                        <th className='text-center'>Niveau requis</th>
                        <th className='text-center'>Auto-évaluation</th>
                        <th style={{ borderTopRightRadius: "1em" }} className='text-center'>Mode d'apprentissage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='text-orange'>Software Engineering</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Définir les différentes phases du développement d'un logiciel.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Projet, Autonomie</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Connaître les différentes méthodes de gestion de projet (SCRUM, Agile)</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Projet, Autonomie</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Connaître les différentes méthodes de gestion de versions (Gitlab)</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Projet, Autonomie</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Appliquer l'une de ces méthodes à un projet</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Projet</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Web sémantique</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Concevoir et comprendre un modèle pour une application.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Savoir déduire de nouvelles connaissances à partir d'une base de connaissances.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center'>travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Savoir déduire de nouvelles connaissances à partir d'une base de connaissances.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center'>Projet et travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Data Analysis and Processing : Big Data</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Savoir comment explorer et représenter des ensembles de données</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Maîtriser les complexités liées au traitement statistique des données et connaître les techniques à utiliser pour les minimiser</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center'> Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Evaluer les performances d’un algorithme de clustering</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center'>Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3' style={{ borderBottomLeftRadius: "0.5em" }}>Être capable de mettre en application les différents algorithmes de clustering dans un nouveau jeu de données.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center' style={{ borderBottomRightRadius: "0.5em" }}>travaux pratiques</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default SkillMatrixBigData;