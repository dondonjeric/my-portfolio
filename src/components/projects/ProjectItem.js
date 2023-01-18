import React, { useState } from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import './ProjectItem.css';


const ProjectItem = (props) => {

    return (
        <div className='project-item'>
            <h1><Link to={props.item.href}>{props.item.title}</Link></h1>
            <h3>{props.item.description}</h3>
        </div>
    );
}

export default ProjectItem;