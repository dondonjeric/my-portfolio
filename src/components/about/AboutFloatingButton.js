import React from 'react';
import './AboutFloatingButton.css';

const AboutFloatingButton = () => {
  return (
    <div className='about-floating-button-container'>
        <a href="#about"><button className='about-floating-button-item'>About me</button></a>
        <a href="#skills"><button className='about-floating-button-item'>Skills</button> </a>
        <a href="#timeline"><button className='about-floating-button-item'>Timeline</button></a>
        
        {/* <a href="#about"><button className='about-floating-button-item'><i class="fa-solid fa-user"></i></button></a>
        <a href="#skills"><button className='about-floating-button-item'><i class="fa-duotone fa-code"></i></button> </a>
        <a href="#timeline"><button className='about-floating-button-item'><i class="fa-regular fa-timeline-arrow"></i></button></a> */}
    </div>
  )
}

export default AboutFloatingButton