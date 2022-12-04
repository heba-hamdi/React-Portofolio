import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
       <header className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Heba Hamdi</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
            <img src={ME}/>
        </div>
     
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      
        
       </header>
    );
}

export default Header;
