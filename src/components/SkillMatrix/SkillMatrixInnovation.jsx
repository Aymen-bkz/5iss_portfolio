import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import './SkillMatrix.css'

const SkillMatrixInnovation = () => {

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
                        <th className='text-orange'>Gestion d'un projet innovant</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Résoudre un problème de manière créative</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Développer la première étape de l'innovation</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre la production, la validation, la distribution, l'acceptabilité et les suites de l'innovation.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Projet SOA</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Structurer et diriger un projet innovant</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Projet SOA</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Apprendre le travail en équipe</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Étudiants pluridisciplinaires travaillant en équipe</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Projet SOA</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Soyez convaincant : présentez et défendez une idée</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Exprimer et échanger des hypothèses</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Suggérer une stratégie pour résoudre le problème identifié</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Suggérer un modèle</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3' style={{ borderBottomLeftRadius: "0.5em" }}>Choisir, concevoir et / ou justifier un protocole ou un prototype expérimental</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center' style={{ borderBottomRightRadius: "0.5em" }}>Hackathon, Projet Intégrateur, Projet SOA</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default SkillMatrixInnovation;