import React, { useState } from 'react';


import './BootCamp.css';

const BootCamp = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected == i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    const bootcamp = [
        {
            title: 'Week 1 - Java Fundamentals',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Week 2 - Collection Framework, Java 9 - 17',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Week 3 - Springboot Fundamentals',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Week 4 - Springboot Unit Testing',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Week 5 - Miniproject',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Week 6 - Sandbox Project',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];
    return (
        <div className='bootcamp'>
            {/* <h1>BootCamp</h1> */}
            <br/>
            <br/>
            <div className='bootcamp-wrapper'>
                {/* <div className='accordion'>
                    <div className='accordion-item'>
                        <h2 className='accordion-header'>
                            <button className='accordion-button'>
                                <b>Week 1</b> - Java Fundamentals
                            </button>
                        </h2>
                    </div>
                </div> */}
                <div className='bootcamp-accordion'>
                {
                    bootcamp.map((item, i) =>( 
                        <div className='bootcamp-accordion-item'>
                            <div className='bootcamp-item-title' onClick={() => toggle(i)}>
                                <h2>{item.title}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'bootcamp-item-description bootcamp-item-description-show' : 'bootcamp-item-description'}>
                                {item.description}
                            </div>
                        </div>
                    ))
                }
                </div>
                {/* <div className='bootcamp-container week1'>
                    <p><b>Week 1</b> - Java Fundamentals</p>
                </div>
                <div className='bootcamp-container week2'>
                    <p><b>Week 2</b> - Collection Framework, Java 9 - 17</p>
                </div>
                <div className='bootcamp-container week3'>
                    <p><b>Week 3</b> - Springboot Fundamentals</p>
                </div>
                <div className='bootcamp-container week4'>
                    <p><b>Week 4</b> - Springboot Unit Testing</p>
                </div>
                <div className='bootcamp-container week5'>
                    <p><b>Week 5</b> - Miniproject</p>
                </div>
                <div className='bootcamp-container sandbox'>
                    <p><b>Week 6 - 9</b> - Sandbox Project</p>
                </div> */}
            </div>
        </div>
    );
}

export default BootCamp;