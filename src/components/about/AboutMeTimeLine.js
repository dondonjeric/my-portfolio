import React from 'react'

import './AboutMeTimeLine.css';

const AboutMeTimeLine = () => {

    const sections = document.querySelectorAll('.about-me-timeline__section');
    const timeline = document.getElementById('main');
    const line = document.getElementById('line');

    console.log(sections);
    console.log(line);
    console.log(timeline);
    // line.style.bottom = `calc(100% - 20px)`;
    let prevScroll = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const target = window.innerHeight * .8;

    console.log(target);
    const scrollHandler = (e) => {
        const { scrollY } = window;
        up = scrollY < prevScroll;
        down = !up;
        const timelineRect = timeline.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect();
        //const lineHeight = lineRect.bottom - lineRect.top;

        const dist = target - timelineRect.top;
        console.log(dist);
    }

    

  return (
    <div className='about-me-timeline__container'>
        <div className='about-me-timeline__top-section'>
            <h2>Present</h2>
            <p>Recently graduated from the CSV Academy!</p>
        </div>
        <div className='about-me-timeline__main' id='main'>

            <div className='about-me-timeline__line' id='line'></div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>Work Exp</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>College</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>Highschool</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>Work Exp</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>College</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>Highschool</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>Work Exp</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>College</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
            <div className='about-me-timeline__section'>
                <div className='about-me-timeline__section-icon'></div>
                <div className='about-me-timeline__section-content'>
                    <h2>Highschool</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum explicabo error dolores, ipsam provident veritatis, laudantium esse itaque, ab suscipit aperiam? Vero, quas laborum. A voluptatem, harum cumque obcaecati praesentium vero alias, sed atque sint officiis nemo facere iste aspernatur sunt exercitationem minus maxime neque voluptate doloribus beatae numquam!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMeTimeLine