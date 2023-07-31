import React from 'react';

import Logo from '../../Assets/img/logo.png'; 
import Basket from '../../Assets/img/basket.png';
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="container">
                <div className="nav-list">
                    <div className="nav-item box">
                        <div>
                            <img src={Logo} alt="Logo" />
                        </div>

                        <div className='asdasd' >
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">Pages</a>
                        </div>
                    
                    </div>
                    
                    <div className="nav-item" > 
                        <a  className="nav-basket" href="#"><img className='navBasImg' src={Basket} alt="" /></a>
                        <a className="nav-btn" href="#">Donate now</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
