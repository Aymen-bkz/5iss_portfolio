import React, { useState, useEffect } from 'react';
import Anime from 'animejs/lib/anime.es'
import './textAnime.sass'
import FadeIn from 'react-fade-in'


const TextAnime = (props) => {
    const [anime_text] = useState({
        nom: props.nom,
        prenom: props.prenom,
    });
    useEffect(() => {
        var textWrapper = document.querySelectorAll('.ml6 .letters');
        textWrapper.forEach(e => {
            e.innerHTML = e.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        })
        Anime.timeline({ loop: false })
            .add({
                targets: '.ml6',
                opacity: [0, 1],
                duration: 200,
                easing: "easeOutExpo",
                delay: 100
            })
            .add({
                targets: '.ml6 .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                delay: (el, i) => 70 * i
            });
    })
    return (
        <div className='textAnime'>
            {/* <FadeIn transitionDuration={500} delay={300}>
                <div><h5 className="text-orange">Bonjour, je suis</h5></div>
            </FadeIn> */}
            <FadeIn transitionDuration={1000} delay={100} className='text-light-gray'>
                <h1 className='fw-bolder'>Bienvenue dans mon portefeuille.</h1>
            </FadeIn>
            <h1 className="ml6 text-light-gray">
                <span className="text-wrapper">
                    <div className="nom">
                        <span className="letters"> {anime_text.nom} </span>
                    </div>
                    <div className="prenom">
                        <span className="letters"> {anime_text.prenom} </span>
                    </div>
                </span>
            </h1>
            <FadeIn transitionDuration={500} delay={1500} className='text-gray'>
                <h4>Ingénieur en Electronique, Automatique, Systèmes embarqués </h4>
            </FadeIn>
            
        </div>
    );
};

export default TextAnime;