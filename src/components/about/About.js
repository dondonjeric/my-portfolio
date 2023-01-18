import React from 'react';


import './About.css';
import AboutFloatingButton from './AboutFloatingButton';
import AboutMe from './AboutMe';

const About = () => {
    return (
        <div>
            {/* <h1>About</h1> */}
            <AboutFloatingButton />
            <AboutMe/>
        </div>
    );
}

export default About;