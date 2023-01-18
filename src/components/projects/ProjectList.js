import React from 'react';

import ProjectItem from './ProjectItem';

import './ProjectList.css';


const ProjectList = () => {
    const projects = [
        {
            title: "Banking Account",
            description: "Week 1 - Create a Java program that can create a bank account and perform transactions on the account.",
            href: "/account"
        },
        {
            title: "Grocery",
            description: "Week 2 - Implement a grocery application",
            href: "/grocery"
        },
        {
            title: "Employees",
            description: "Week 3 - Create a Springboot application that can manage employees and their skills",
            href: "/employees"
        },
        {
            title: "Sandbox Project",
            description: "Project created during the Sandbox Project that has an addition of front end.",
            href: "/sandbox"
        }
    ];
    return (
        <div>
            {
                projects.map(project => (
                    <ProjectItem key={project.title}item={project}/>
                ))
            }
        </div>
    );
}

export default ProjectList;