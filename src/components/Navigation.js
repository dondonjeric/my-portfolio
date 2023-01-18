import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import './Navigation.css';


const Navigation = () => {



    const CustomLink = ({href, children, ...props}) => {
        const resolvedPath = useResolvedPath(href);
        const isActive = useMatch({path: resolvedPath.pathname, end: true});
        return (
            <li className={isActive? 'active': ''}>
                <Link to={href} {...props}>{children}</Link>
            </li>);
    }
    return (
        <nav className='nav'>
            <Link to="/" className='site-title'>Dondon Co</Link>
            <ul>
                <CustomLink href='/'>Home</CustomLink>
                <CustomLink href='/bootcamp'>Boot Camp</CustomLink>
                <CustomLink href='/projects'>Projects</CustomLink>
                <CustomLink href='/about'>About Me</CustomLink>
            </ul>
        </nav>
    );
}


export default Navigation;