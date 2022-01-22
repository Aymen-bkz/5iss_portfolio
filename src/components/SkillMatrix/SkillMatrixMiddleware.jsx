import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import { FcInfo } from 'react-icons/fc'

import './SkillMatrix.css'

const SkillMatrixMiddleware = () => {

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
                        <th className='text-orange'>Service Oriented Architecture</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Savoir comment définir une architecture orientée services</th>
                        <td className='text-center w-25'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours et TD</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Déployer une SOA avec des services web</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours et TD</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Déployer et configurer une SOA en SOAP</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours et TD</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Déployer et configurer une SOA en REST</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours et TD</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Intégrer un gestionnaire de processus dans une SOA	</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours et TD</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Intergiciel pour les objets connectés</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Savoir situer les principales normes de l'Internet des objets.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Cours</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Déployer une architecture conforme à une norme IoT et mettre en œuvre un réseau de capteurs.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet et travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Déploiement et configuration d'une architecture IoT à l'aide d'OM2M.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet et travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Interagir avec les différentes ressources de l'architecture à l'aide de services REST.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet et travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Intégrer une nouvelle technologie dans l'architecture déployée.</th>
                        <td className='text-center'>4</td>
                        <td className='text-center'>4</td>
                        <td className='text-center'>Projet et travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='text-orange'>Adaptabilité : Cloud et Gestion Autonomique</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre le concept de virtualisation et du "cloud computing"</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Cours et Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Comprendre les différences fondamentales entre les deux principaux types d'hôtes de
                            virtualisation, à savoir les machines virtuelles (VM) et les conteneurs (CT)</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Cours et Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Mettre en œuvre un outil d'orchestration simple afin d'approvisionner une application Web
                         à deux niveaux utilisant des services node.js .</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>Travaux pratiques</td>
                    </tr>
                    <tr>
                        <th className='ps-3'>Utiliser un service de Cloud de type IaaS.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center'>travaux pratiques (Openstack)</td>
                    </tr>
                    <tr>
                        <th className='ps-3' style={{ borderBottomLeftRadius: "0.5em" }}>Mettre en place une architecture réseau virtuelle.</th>
                        <td className='text-center'>3</td>
                        <td className='text-center'>3</td>
                        <td className='text-center' style={{ borderBottomRightRadius: "0.5em" }}>travaux pratiques (Openstack)</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default SkillMatrixMiddleware;