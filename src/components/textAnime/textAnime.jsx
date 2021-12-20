import React, { useState,useEffect } from 'react';
import Anime from 'animejs/lib/anime.es'
import './textAnime.sass'

const TextAnime = (props) => {
    const [anime, setanime] = useState({
        name: props.name
    });
    useEffect(() => {
        var textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        Anime.timeline({ loop: false })
            .add({
                targets: '.ml6 .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                delay: (el, i) => 50 * i
            });
    })
    return (
        <div>
            <div>
                <h1 className="ml6">
                    <span className="text-wrapper">
                        <span className="letters"> {anime.name} </span>
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default TextAnime;