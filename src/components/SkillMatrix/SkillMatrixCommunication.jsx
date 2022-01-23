import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import './SkillMatrix.css'

const SkillMatrixCommunication = () => {

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
                        <th className='text-orange'>Protocoles et communication</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre les principales phases de développement des communications mobiles et le
                         développement de la technologie associée.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Rapport</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre l'impact des nouvelles technologies mobiles</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Rapport</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre la production, la validation, la distribution, l'acceptabilité et les suites de l'innovation.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Projet SOA</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>être capable d'analyser et d'évaluer les technologies optimales de réseaux sans fil</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>être en mesure de proposer des solutions technologiques optimales pour les réseaux IoT.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Rapport</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre et maîtriser l'optimisation des protocoles de communication pour l'IoT en
                         ce qui concerne les limitations énergétiques.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur, Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre et maîtriser l'optimisation des protocoles de communication au regard 
                        des préoccupations de sécurité.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Hackathon, Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Connaître les principales techniques de traitement utilisées pour la communication 
                        numérique et savoir expliquer la structure de base d'un émetteur-récepteur RF numérique</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Rapport</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Maîtriser l'architecture d'un système de gestion de l'énergie, le stockage simple,
                         la récupération d'énergie, savoir dimensionner l'élément de stockage en fonction du cahier des charges</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Sécurité des réseaux IoT</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre les principes fondamentaux de la sécurité</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Projet Intégrateur, cours, travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Etre capable d'identifier les faiblesses de sécurité dans une architecture IoT</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center'>Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Être capable d'évaluer l'impact de l'exploitation d'une vulnérabilité de 
                        sécurité dans une architecture IoT.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center'>Projet Intégrateur</td>
                    </tr>
                    <tr>
                        <th className='ps-3' style={{ borderBottomLeftRadius: "0.5em" }}>être capable de proposer des contre-mesures
                         de sécurité adéquates</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>2</td>
                        <td className='text-center' style={{ borderBottomRightRadius: "0.5em" }}>Projet Intégrateur</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default SkillMatrixCommunication;