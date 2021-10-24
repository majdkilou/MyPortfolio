import React from "react";
import Particles from 'react-particles-js';
import particlesConfig from './configParticles';

export default function ParticlesBackground(){
    return(
        <Particles height="100vh" width="100vw" params={particlesConfig}>

        </Particles>
        

    );
}