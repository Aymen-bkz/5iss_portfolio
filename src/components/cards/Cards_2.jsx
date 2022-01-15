import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Anime from 'animejs'

import './cards.css'

import hackathon from '../../assets/hackathon.JPG'
import project from '../../assets/project.png'

const Cards_2 = () => {
    useEffect(() => {
        Anime.timeline({ loop: false })
            .add({
                targets: '.cards-wrapper',
                opacity: [0, 1],
                duration: 200,
                easing: "easeOutExpo",
                delay: 100
            })
            .add({
                targets: '.cards-wrapper .card-grid-space',
                translateY: ["19em", 0],
                translateZ: 0,
                delay: (el, i) => 200 * i
            });
    });
    return (
        <div>
            <div className='Cards-comp'>
                <section className="cards-wrapper">
                    <div className="card-grid-space">
                        <NavLink to='/Hackathon' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className='card-body-p' style={{ "--bg-img": `url(${hackathon})` }}>
                                <div>
                                    <h1>Hackathon</h1>
                                    <div className="tags">
                                        <div className="tag">Hackathon</div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card-grid-space">
                        <NavLink to='/project' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className='card-body-p' style={{ "--bg-img": `url(${project})` }}>
                                <div>
                                    <h1>Hackathon</h1>
                                    <div className="tags">
                                        <div className="tag">Hackathon</div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cards_2;