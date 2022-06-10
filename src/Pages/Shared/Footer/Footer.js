import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5'>
            <p>copyright <FontAwesomeIcon icon={faCopyright} className="fa-thin"/> {year}</p>
        </div>
    );
};

export default Footer;