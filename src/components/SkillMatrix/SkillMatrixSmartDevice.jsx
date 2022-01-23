import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import './SkillMatrix.css'

const SkillMatrixSmartDevice = () => {

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
                        <th className='text-orange'>Introduction aux capteurs</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre les notions de base des capteurs, de l'acquisition de données :
                            point de vue de la physique, de l'électronique et de la métrologie.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>TD, Projet</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Être capable de fabriquer un capteur de nanoparticules à l'aide des outils de la microélectronique
                            : synthèse chimique, assemblage, test.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>TD, Projet</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Être capable de concevoir la fiche technique du capteur fabriqué</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours, AIME</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Être capable de concevoir la fiche technique du capteur fabriqué</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre l'architecture des microcontrôleurs et comment les utiliser.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet, Stage</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Être capable de concevoir un système d'acquisition de données
                            (capteur, conditionneur, microcontrôleur) en fonction de l'application.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours, Projet</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Être capable de concevoir le circuit électronique du conditionneur de
                            signal d'un capteur (conception + simulation).</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>TD, Projet</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Être capable de concevoir un écran pour accueillir le capteur de gaz</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>TD, Projet</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Etre capable de concevoir le logiciel pour utiliser le capteur de gaz et son IHM</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Projet</td>
                    </tr>
                    <tr>
                        <th className='ps-3' style={{ borderBottomLeftRadius: "0.5em" }}>Être capable de combiner tous les composants
                            mentionnés ci-dessus dans un dispositif intelligent.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center' style={{ borderBottomRightRadius: "0.5em" }}>Projet</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default SkillMatrixSmartDevice;