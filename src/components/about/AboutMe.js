import React from "react";
import ProfilePic from '../../assets/dondonco.png';

import './AboutMe.css';
import AboutMeSkills from "./AboutMeSkills";
import AboutMeTimeLine from "./AboutMeTimeLine";

const AboutMe = () => {
    return (
        <div className="about-me__container">
            <div id="about" className="about-me__section">
                <div className="about-me__left">
                    <img className="about-me__left-img"src="https://static.thenounproject.com/png/4188546-200.png"/>
                    <span>Dondon Jeric D. Co</span>
                    <span>Jr. Software Engineer</span>
                </div>
                <div className="about-me__right">
                    <h1>About Me!</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div id="skills" className="about-me__section">
                <h1>Skills</h1>
                <AboutMeSkills />
            </div>
            <div id="timeline" className="about-me__section">
                
                <AboutMeTimeLine />
            </div>
        </div>
    );
}

export default AboutMe;