import React from 'react';
import { Table } from 'react-bootstrap';

import './About.css'

const About = () => {
    return (
        <div className="about" style={{ marginTop: "7em" }}>
            <h2 id="description" className='text-gray titre'>Introdution</h2>
            <h5 className='text-white'>
                Ce portfolio regroupe l'ensemble des connaissances et compétences acquises au cours de ma cinquième
                année à l'Institut National des Sciences Appliquées INSA Toulouse 2021-2022. Il s'inscrit dans le cadre de formation
                "Systèmes Intelligents Innovants" (SSI) que j'ai suivie, après quatre années de formation classique d'ingénieur en
                électronique, automatique et systèmes embarqués.
            </h5>
            <h2 id="description" className='text-gray titre'>Contenu des cours pour le programme SSI</h2>
            <Table  className='tabISS' striped hover responsive>
                <thead className='head'>
                    <tr>
                        <th style={{ borderTopLeftRadius: "2em" }}>Code</th>
                        <th>Title</th>
                        <th>Supervisor</th>
                        <th style={{ borderTopRightRadius: "2em" }}>Total hours</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-orange'>
                        <th className='module'>I5SSEN11</th>
                        <th className='module'>Smart Devices</th>
                        <th className='module'> Jérémie Grisolia</th>
                        <th className='module'>52,75</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Microcontrollers and Open-Source Hardware, Embedded IA (M&OSH)</th>
                        <th>Jérémie Grisolia, Sylvaine Lohez</th>
                        <th>25</th>
                    </tr>
                    <tr>
                        <th ></th>
                        <th > CAD, manufacturing and integration of nano-technology sensors (AIME)</th>
                        <th> Jérémie Grisolia </th>
                        <th> 14 </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th >Sensors introduction</th>
                        <th> Jérémie Grisolia </th>
                        <th> 11,25 </th>
                    </tr>

                    <tr>
                        <th></th>
                        <th >Analog electronic labs</th>
                        <th> Jérémie Grisolia </th>
                        <th> 2,5 </th>
                    </tr>
                    <tr>
                        <th className='module'><span>I5SSCM11</span></th>
                        <th className='module'>Communication</th>
                        <th className='module'>Daniela Dragomirescu</th>
                        <th className='module'>64,25</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Protocols for connected objects</th>
                        <th>Daniela Dragomirescu, Slim Abdellatif, Etienne Sicard</th>
                        <th>33,25</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Energy for connected objects (recovery, transfert)</th>
                        <th>Jean-Marie Dilhac</th>
                        <th>10,25</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Security for network of connected objects</th>
                        <th>Eric Alata</th>
                        <th>10,25</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Emerging network (SDN, NGN)</th>
                        <th>Slim Abdellatif</th>
                        <th>10,25</th>
                    </tr>

                    <tr>
                        <th className='module'><span>I5SSIL11</span></th>
                        <th className='module'>Middleware & Service</th>
                        <th className='module'>Thierry Monteil</th>
                        <th className='module'>62</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Service Oriented Architecture</th>
                        <th>Nawal Guermouche</th>
                        <th>31</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Middleware for IoT</th>
                        <th>Thierry Monteil</th>
                        <th>14,75</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Adaptability : cloud and autonomic management</th>
                        <th>Sami Yangui</th>
                        <th>16,25</th>
                    </tr>
                    <tr>
                        <th className='module'><span>I5SSIF11</span></th>
                        <th className='module'>Analysis and data processing, business applications</th>
                        <th className='module'>Nawal Guermouche</th>
                        <th className='module'>37,5</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Software Engineering</th>
                        <th>Nawal Guermouche</th>
                        <th>6,25</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Semantic data</th>
                        <th>Nicolas Seydoux, Nathalie Hernandez</th>
                        <th>8</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Big data</th>
                        <th>Marie-Jo Huguet,</th>
                        <th>15</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Hackaton</th>
                        <th>Thierry Monteil</th>
                        <th>8,25</th>
                    </tr>
                    <tr>
                        <th className='module'><span>I5SSRS11</span></th>
                        <th className='module'>Project & Portfolio</th>
                        <th className='module'>Vincent Migliore</th>
                        <th className='module'>75,75</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Innovative project</th>
                        <th>Thierry Monteil</th>
                        <th>37,5</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Portfolio</th>
                        <th>Vincent Migliore</th>
                        <th>8,25</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>English</th>
                        <th>Joseph Shea</th>
                        <th>10,25</th>
                    </tr>
                    <tr>
                        <th className='module'><span>I5SSGE11</span></th>
                        <th className='module'>Innovation and humanity</th>
                        <th className='module'>Hélène Hereng</th>
                        <th className='module'>77,5</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Innovation</th>
                        <th>Eric Jolivet</th>
                        <th>17,5</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Creativity methods / TRIZ method</th>
                        <th>Stéphane Negny</th>
                        <th>10</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Team Management / Social Acceptability</th>
                        <th>N. Lacune, MJ Tragin</th>
                        <th>20</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Sport</th>
                        <th>Véronique Gros, Sylvie Rossard</th>
                        <th>21,5</th>
                    </tr>
                    <tr>
                        <th style={{ borderBottomLeftRadius: "1em" }}></th>
                        <th>Individualized Professional Development</th>
                        <th>Thierry Dupont</th>
                        <th style={{ borderBottomRightRadius: "1em" }}>8,5</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default About;