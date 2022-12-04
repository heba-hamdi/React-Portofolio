import React from 'react';
import './testimonials.css';
import Avt1 from '../../assets/avatar1.jpg';
import Avt2 from '../../assets/avatar2.jpg';
import Avt3 from '../../assets/avatar3.jpg';
import Avt4 from '../../assets/avatar4.jpg';

import { Pagination, navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Testimonials = () => {
    let data = [
        {
            index: 1,
            avatar: Avt1,
            name: 'Tina Snow',
            review: 'dolor sit amet consectetur adipisicing elit. Nostrum sequi alias numquam iusto voluptate, laudantium cumque sint error quibusdam, recusandae fugit deserunt laboriosam distinctio facilis ad odio perspiciatis dicta cum iure obcaecati! Rem quasi aut illum ducimus corporis facilis fugit? Aut in aliquam ex totam, culpa ullam hic soluta perspiciatis.'
        }
        ,
        {
            index: 2,
            avatar: Avt2,
            name: 'Adam Wale',
            review: 'dolor sit amet consectetur adipisicing elit. Nostrum sequi alias numquam iusto voluptate, laudantium cumque sint error quibusdam, recusandae fugit deserunt laboriosam distinctio facilis ad odio perspiciatis dicta cum iure obcaecati! Rem quasi aut illum ducimus corporis facilis fugit? Aut in aliquam ex totam, culpa ullam hic soluta perspiciatis.'
        },
        {
            index: 3,
            avatar: Avt3,
            name: 'Robert Smith',
            review: 'dolor sit amet consectetur adipisicing elit. Nostrum sequi alias numquam iusto voluptate, laudantium cumque sint error quibusdam, recusandae fugit deserunt laboriosam distinctio facilis ad odio perspiciatis dicta cum iure obcaecati! Rem quasi aut illum ducimus corporis facilis fugit? Aut in aliquam ex totam, culpa ullam hic soluta perspiciatis.'
        },
        {
            index: 4,
            avatar: Avt4,
            name: 'Amira AlMahdy',
            review: 'dolor sit amet consectetur adipisicing elit. Nostrum sequi alias numquam iusto voluptate, laudantium cumque sint error quibusdam, recusandae fugit deserunt laboriosam distinctio facilis ad odio perspiciatis dicta cum iure obcaecati! Rem quasi aut illum ducimus corporis facilis fugit? Aut in aliquam ex totam, culpa ullam hic soluta perspiciatis.'
        }
    ]
    return (
        <section id='testimonials'>
            <h5>Review from Cliets</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonial__container" modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}               
                pagination={{ clickable: true }}
                
           >

                {data.map(({ index, avatar, name, review }) => {
                    return (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client__avatar">
                                <img src={avatar} alt="" /></div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </section>
    );
}

export default Testimonials;
