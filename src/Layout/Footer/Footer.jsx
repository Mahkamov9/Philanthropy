import React from 'react';
import './Footer.css';

import FooterLogo from '../../Assets/svg/logo.svg';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-box">
                        <div className='footer-box-logo'>
                            <img  src={FooterLogo} alt="Logo" />
                            <p className='footer-logo-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris.</p>
                        </div>
                        <div className='footer-menu'>
                            <a href="#" className="footer-menu-link">Menu</a>
                            <a href="#" className="footer-menu-link">Home</a>
                            <a href="#" className="footer-menu-link">About</a>
                            <a href="#" className="footer-menu-link">Blog</a>
                            <a href="#" className="footer-menu-link">Blog post</a>
                            <a href="#" className="footer-menu-link">Donate</a>
                            <a href="#" className="footer-menu-link">Donate Single</a>
                            <a href="#" className="footer-menu-link">Contact</a>
                        </div>

                        <div className='footer-menu'>
                            <a href="#" className="footer-menu-link">Utility <br /> Pages</a>
                            <a href="#" className="footer-menu-link">Start here</a>
                            <a href="#" className="footer-menu-link">Styleguide</a>
                            <a href="#" className="footer-menu-link">Password Protected</a>
                            <a href="#" className="footer-menu-link">404 Not found</a>
                            <a href="#" className="footer-menu-link">Licenses</a>
                            <a href="#" className="footer-menu-link">Changelog</a>
                        </div>

                        <div className='footer-card'>
                            <p className='footer-card-text'>Join us and let’s make a better world, today</p>
                                <a className='footer-card-link' href="#">Donate now</a>
                                <a className='footer-card-link' href="#">More ways to help</a>
                            
                        </div>
                    </div>
                    <div className='footer-footer'>
                        <a href='https://github.com/Mahkamov9' className='footer-footer-text'>Copyright © Philanthropy X | Designed |   <a href='https://github.com/Mahkamov9' className='footer-footer-text'>Mahkamov9</a> </a>
                        
                        <div className='footer-rectangle-box'>
                            <div className='footer-rectangle'></div>
                            <div className='footer-rectangle'></div>
                            <div className='footer-rectangle'></div>
                            <div className='footer-rectangle'></div>
                            <div className='footer-rectangle'></div>
                            <div className='footer-rectangle'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
