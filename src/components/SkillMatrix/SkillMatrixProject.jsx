import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import './SkillMatrix.css'

const SkillMatrixProject = () => {

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
                        <th className='text-orange'>Projet innovant</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Analyser un problème de la vie réelle</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Proposer une solution technologique à un problème</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Mettre en œuvre un prototype pour résoudre le problème</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Présenter et débattre (en anglais) du choix technique effectué</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Rédiger un rapport (en anglais) sur le projet développé</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre et maîtriser l'optimisation des protocoles de communication pour l'IoT en
                         ce qui concerne les limitations énergétiques.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3' style={{ borderBottomLeftRadius: "0.5em" }}>Comprendre et maîtriser l'optimisation des protocoles de communication au regard 
                        des préoccupations de sécurité.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center' style={{ borderBottomRightRadius: "0.5em" }}>Hackathon, Projet Intégrateur</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default SkillMatrixProject;