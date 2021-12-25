import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import './cards.css'

import SD from '../../assets/SD.png'

const Cards = () => {
    return (
        <div>
            <section class="cards-wrapper">
                <div class="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body' style={{ "--bg-img": `url(${SD})` }}>
                            <div>
                                <h1>Smart Device</h1>
                                <div class="tags">
                                    <div class="tag">Smart Device</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div class="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body' style={{ "--bg-img": `url(${SD})` }}>
                            <div>
                                <h1>Smart Device</h1>
                                <div class="tags">
                                    <div class="tag">Smart Device</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div class="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body' style={{ "--bg-img": `url(${SD})` }}>
                            <div>
                                <h1>Smart Device</h1>
                                <div class="tags">
                                    <div class="tag">Smart Device</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div class="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body' style={{ "--bg-img": `url(${SD})` }}>
                            <div>
                                <h1>Smart Device</h1>
                                <div class="tags">
                                    <div class="tag">Smart Device</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div class="card-grid-space">
                    <NavLink to='/' tag={Link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className='card-body' style={{ "--bg-img": `url(${SD})` }}>
                            <div>
                                <h1>Smart Device</h1>
                                <div class="tags">
                                    <div class="tag">Smart Device</div>
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