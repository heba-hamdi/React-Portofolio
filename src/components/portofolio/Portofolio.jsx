import React from 'react';
import './portofolio.css';
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const data=[
    {
        id:1,
        image:Img1,
        title:'Crypto Currency dashboard',
        github:'https://github.com/',
        demo:'https://dribbble.com/'
    },
    {
        id:2,
        image:Img2,
        title:'Portofolio Website',
        github:'https://github.com/',
        demo:'https://dribbble.com/'
    }
    ,
    {
        id:3,
        image:Img3,
        title:'Dashboard',
        github:'https://github.com/',
        demo:'https://dribbble.com/'
    }
    ,
    {
        id:4,
        image:Img4,
        title:'Restaurant',
        github:'https://github.com/',
        demo:'https://dribbble.com/'
    }
    ,
    {
        id:5,
        image:Img5,
        title:'Movie Website',
        github:'https://github.com/',
        demo:'https://dribbble.com/'
    }
    ,
    {
        id:6,
        image:Img6,
        title:'Game Website',
        github:'https://github.com/',
        demo:'https://dribbble.com/'
    }
]
    


const Portofolio = () => {
    return (
        <section id='portofolio'>
            <h5>My Recent Work</h5>
            <h2>Portofolio</h2>

            <div className="container portofolio__container">
            {data.map(({id,image,title,github,demo})=>{
                return(
                    <article className='portofolio__item'>
                    <div className="portofolio__item-image">
                        <img src={image} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <div className="portofolio__item-cta">
                        <a href={github} className='btn' target="_blank">Github</a>
                        <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </article>
                )
            })}
               
                

            </div>
        </section >
    );
}

export default Portofolio;
