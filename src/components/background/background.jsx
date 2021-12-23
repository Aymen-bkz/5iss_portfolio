import React from 'react';
import Particles from "react-tsparticles";
import Particles_opt from '../../assets/particlesjs-config.json'
import './background.sass'

const background = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className='Particles'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={Particles_opt}
      />
    </div>
  );
};

export default background;