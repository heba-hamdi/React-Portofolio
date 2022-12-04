import React from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={Me} alt="About image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ completed</small>
                        </article>
                    </div>
                    
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt nam atque neque dolor, officia fugit, eos consequuntur sint aspernatur debitis amet architecto asperiores in voluptatibus nihil doloribus eaque facilis.</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>


            </div>
        </section>
    );
}

export default About;
