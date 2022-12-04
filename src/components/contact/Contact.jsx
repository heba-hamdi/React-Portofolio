import React, { useState, useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';

 const Contact = () => {
    const form = useRef();
    const [message, setmessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm("service_i53hktd","template_e4fubs8", form.current, 'nOMP6sdO2zOxja7GH')
            .then((result) => {
                console.log(result.text);
                setmessage("Message sent");
               
            }, (error) => {
                console.log(error.text);
             
            });
            e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container container__contact">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>hebahamdi@gmail.com</h5>
                        <a href="mailto:dummyegator@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messanger</h4>
                        <h5>hebahamdi</h5>
                        <a href="https://www.facebook.com/" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>Whats app</h4>
                        <h5>+123456789</h5>
                        <a href="hhtps://api.whatapp.com/send?phone=+2337890987565" target='_blank'>Send a message</a>
                    </article>
                </div>


                <form ref={form} onSubmit={sendEmail}>
                    <input type="text"  name="user_name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
                    <p>{message}</p>
                    <button type="submit" value="Send" className='btn btn-primary'>Send a Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
