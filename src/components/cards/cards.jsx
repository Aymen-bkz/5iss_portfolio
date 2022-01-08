import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Anime from 'animejs'

import './cards.css'

import SD from '../../assets/SD.png'
import Com from '../../assets/Communication.png'
import IoT from '../../assets/IoT.JPG'
import BigData from '../../assets/BigData.JPG'
import Innovation from '../../assets/Innovation.JPG'

const Cards = () => {
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
        <div className='Cards-comp'>
            <section className="cards-wrapper">
                <div className="card-grid-space">
                    <NavLink to='/smartDevice' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body-p' style={{ "--bg-img": `url(${SD})` }}>
                            <div>
                                <h1>Smart Device</h1>
                                <div className="tags">
                                    <div className="tag">Smart Device</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-grid-space">
                    <NavLink to='/communication' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body-p' style={{ "--bg-img": `url(${IoT})` }}>
                            <div>
                                <h1>Communication</h1>
                                <div className="tags">
                                    <div className="tag">Communication</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body-p' style={{ "--bg-img": `url(${Com})` }}>
                            <div>
                                <h1>Middelware</h1>
                                <div className="tags">
                                    <div className="tag">Middelware and Service</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body-p' style={{ "--bg-img": `url(${BigData})` }}>
                            <div>
                                <h1>Big data</h1>
                                <div className="tags">
                                    <div className="tag">Analysis and treatment of data</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body-p' style={{ "--bg-img": `url(${Innovation})` }}>
                            <div>
                                <h1>Project Innovation</h1>
                                <div className="tags">
                                    <div className="tag">Innovation</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default Cards;