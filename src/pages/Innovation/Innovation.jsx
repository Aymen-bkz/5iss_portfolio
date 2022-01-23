import React from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import ImageZoom from 'react-medium-image-zoom';
import './Innovation.css'

import innovation_logo from '../../assets/innovation_logo.jpg'
import img0 from '../../assets/appn/img0.jpg'
import img1 from '../../assets/appn/img1.jpg'
import triz from '../../assets/TRIZ.JPG'

import Engineering from '../../assets/rapports/Engineering Ethics Issues.pdf'
import trizPdf from '../../assets/rapports/TRIZ.pdf'
import SkillMatrixInnovation from '../../components/SkillMatrix/SkillMatrixInnovation';



const Innovation = () => {
    return (
        <div className='innovation'>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card className="header-card pt-3 card mt-5">
                        <Card.Img variant="top" src={innovation_logo} className='rounded mx-auto d-block' style={{ width: "30%" }} />
                        <Card.Body className='text-center'>
                            <h2 className='text-orange h2 sous-titre'>Innovation & humanity</h2>
                            <hr />
                            <Card.Text className='text-gray fs-6' >
                                Le métier d'ingénieur est basé sur l'expertise technique, mais nous ne pouvons pas négliger les aspects humains
                                de la profession. Dans ce cours, nous verrons différents sujets qui sont pertinents pour les ingénieurs et les
                                humains d'aujourd'hui. Nous étudierons les méthodes de management, mais aussi les techniques de
                                psychologie sociale et  de la créativité, ainsi que la mentalité sportive.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2 id="description" className='text-gray titre'>Description</h2>
                <p className="text-white">
                    Le module Innovation & Humanité regroupe six cours qui se concentre sur le management des équipes, créativité
                    et les compétences humaines.
                </p>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th style={{ borderTopLeftRadius: "1em" }}>Innovation & humanity</th>
                            <th style={{ borderTopRightRadius: "1em" }}>Missions et Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Innovation</th>
                            <th>Des cours liées à notre projet innovant où nous discuterons de l'innovation, de la gestion des risques,
                                de l'acceptabilité sociale et d'autres concepts. Nous présenterons également des pitch de notre projet
                                appliquant les stratégies en fonction des concepts que nous avons appris.
                            </th>
                        </tr>
                        <tr>
                            <th>Méthodes de créativité</th>
                            <th>cours sur la méthode de créativité TRIZ, avec une application à un cas concret.
                            </th>
                        </tr>
                        <tr>
                            <th>Psychologie sociale</th>
                            <th>Présentations par groupes étudiants, des analyses de films, le tout lié aux principales thèses de la
                                psychologie sociale comme l'influence sociale ou les risques psychosociaux au travail.
                            </th>
                        </tr>
                        <tr>
                            <th>Sports</th>
                            <th>Stage de sport pratique de trois jours dans les montagnes pyrénéennes.
                            </th>
                        </tr>
                        <tr>
                            <th>Développement professionnel individuel</th>
                            <th>Cours sur les principaux éléments de la gestion d'équipe tels que la gestion des conflits, l'évaluation
                                des performances, la motivation, etc...
                            </th>
                        </tr>
                        <tr>
                            <th style={{ borderBottomLeftRadius: "0.5em" }}>Développement professionnel individuel</th>
                            <th style={{ borderBottomRightRadius: "0.5em" }}>
                                Des ateliers interactifs sur différents sujets liés au projet professionnel, tels que la façon de se comporter
                                lors d'un entretien d'embauche, ce à quoi il faut s'attendre lorsqu'on commence une carrière dans le secteur,
                                des questions sur les salaires. Ces cours ont été suivis d'une simulation d'entretien d'embauche formelle avec
                                des experts en RH qui ont joué le rôle d'intervieweurs pour un emploi fictif.
                            </th>
                        </tr>
                    </tbody>
                </Table>
                <h2 className='text-orange h2 sous-titre'>Psychologie sociale</h2>
                <Row>
                    <Col lg={6}>
                        <p className="text-white">
                            Le cours de psychologie sociale était très spécifique par rapport aux autres cours du module où le processus
                            d'apprentissage consistait souvent en des débats sur un sujet lié au fait d'être ingénieur. Nous avons appris les
                            concepts de base à travers des présentations d'étudiants, sur différentes sujet d'actualité. <br />
                            Nous avons également regarder le film "Douze hommes en colère", puis l'analyser. C'est l'histoire d'un jury d'hommes
                            qui débattent pour savoir s'ils doivent voter coupable ou non coupable lors d'un procès. Derrière cela, presque tous
                            les thèmes de la psychologie sociale tels que, l'influence sociale, la manipulation de la parôle et les préjugés qui ont été présentés.
                        </p>
                    </Col>
                    <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/DLFeLV9QS-8" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </Col>
                </Row>
                <p className="text-white">
                    Le principal travail que nous devions accomplir pour le cours était de présenter un des huit thèmes de la psychologie
                    sociale. Ma présentation portait sur les questions éthiques de l'ingénierie. <br />
                    Vous pouvez trouver les diapositives de la présentation juste en dessous :
                </p>
                <Button href={Engineering} target="Blank_" variant='secondary' className="mt-5 mb-5 d-block mx-auto w-25">Rapport Web sémantique</Button>
                <h2 className='text-orange h2 sous-titre'>Sports</h2>
                <Row>
                    <Col lg={6} className='d-flex align-items-center'>
                        <Carousel showStatus={false} showThumbs={false} autoPlay={false} infiniteLoop>
                            <div>
                                <img src={img0} alt="SDR1" className='w-100' />
                            </div>
                            <div>
                                <img src={img1} alt="SDR2" className='w-100' />
                            </div>
                        </Carousel>
                    </Col>
                    <Col lg={6} className='d-flex align-items-center'>
                        <p className="text-white">
                            Pendant ces trois jours, nous avons réalisé différentes activités.
                            Nous avons tous participé à une course d'orientation. Le but était de trouver les 20 marques dans le temps
                            le plus court. Ensuite, pendant une demi-journée, nous avons fait du canoë, un sport que je n'avais jamais
                            pratiqué auparavant. C'est un peu difficile au début, mais une fois que vous avez pris le coup de main,
                            c'est une sensation formidable. Nous avons également fait l'Accrobranche. <br />
                            Finalement, l'activité principale était la randonnée pédestre. Tous les groupes se sont rendus au aux Pyrénées
                            Ariégeoises. Cependant, en raison de la pluies, nous avons passé qu'un demi-journée.
                        </p>
                    </Col>
                </Row>
                <h2 id="description" className='text-gray titre'>Partie technique</h2>
                <h2 className='text-orange h2 sous-titre'>Innovation</h2>
                <p className="text-white">
                    Le cours sur l'innovation a commencé par quelques introductions théoriques, couvrant les principaux concepts de
                    l'innovation, de la gestion de projet et du travail en équipe. Le véritable défi a commencé après ces exposés,
                    lorsque la classe a commencé à se rapprocher de notre projet principal. Nous avons dû repenser au développement et
                    à la stratégie de notre projet sur la base de ce que nous avions vu.
                    Nous avons fait un pitch de 3 minutes pour présenter l'avancement du projet, les questions d'évaluation des risques,
                    nos méthodes de gestion du temps et l'analyse de l'acceptabilité sociale.
                </p>
                <h2 className='text-orange h2 sous-titre'>Méthodes de créativité</h2>
                <Row>
                    <Col lg={7}>
                        <p className="text-white">
                            Le cours sur les méthodes de créativité a un concept assez simple. Il consiste en des tutoriels où nous apprenons
                            les concepts clés de la méthode de créativité TRIZ, puis nous les appliquons à un objet d'étude de notre choix.
                            Cependant, il s'agit d'une méthode assez complexe et puissante, et l'appliquer correctement n'a pas été une
                            tâche facile. L'objet que j'ai choisi d'étudier était la gourde. Dans un premier temps, nous avons effectué
                            une analyse précise de l'objet, en suivant certaines techniques spécifiques qui nous donneraient des
                            indicateurs clés sur notre objet.
                            Ensuite, nous avons utilisé l'analyse que nous avons faite comme une clé pour utiliser la matrice de résolution
                            TRIZ. Il s'agit de l'élément principal de la méthode. Elle fonctionne en identifiant une contradiction dans
                            l'objet, en les séparant dans le temps et l'espace pour finalement trouver une solution d'amélioration basée
                            sur ces deux contraintes
                        </p>
                    </Col>
                    <Col lg={5}>
                        <ImageZoom zoomMargin={150} overlayBgColorEnd='rgba(0,0,0,0.5)'>
                            <div className='mt-3'>
                                <img src={triz} className='w-75 d-block mx-auto' />
                            </div>
                        </ImageZoom>
                        <Button href={trizPdf} target="Blank_" variant='secondary' className="mt-5 mb-5 d-block mx-auto w-75">Rapport Web sémantique</Button>
                    </Col>
                </Row>
                <h2 className='text-orange h2 sous-titre'>Développement professionnel individuel</h2>
                <p className="text-white">
                    Au fil des années, le module de développement professionnel individuel ou PPI a toujours été présent dans le cursus
                    des ingénieurs INSA. Cette année, pour la 5ème et dernière année, le défi était de nous préparer à un entretien
                    d'embauche simulé pour notre futur stage de projet de fin d'études. pour mon entretien, je l'ai passé avec un
                    responsable des ressources humaines chez Scalian sur un projet IoT. j'ai été assez satisfait de ma performance.
                    Mon interlocuteur m'a donné beaucoup d'informations critiques et cela m'a aidé à mieux me préparer pour les
                    entretiens d'embauche réels que j'ai eus plus tard dans le semestre.
                </p>
                <h2 id="description" className='text-gray titre'>Partie Analytique</h2>
                <p className="text-white">
                    Pour la gestion d'un projet innovant, ce sont des compétences très importantes que j'ai un peu de mal à maîtriser.
                    Je pense que mon expérience à travers ces cours m'a aidé à avoir plus de confiance lorsque je présente, à améliorer
                    mes compétences pour défendre mes idées et à mieux convaincre.
                    Je pense que les cours de gestion d'équipe et de psychologie sociale sont importants pour l'apprentissage de ces
                    compétences, mais le simple fait de côtoyer des étudiants issus de milieux, de cultures et de pays différents m'a
                    également beaucoup aidé.
                </p>
                <SkillMatrixInnovation />
            </Container>
        </div>
    );
};

export default Innovation;