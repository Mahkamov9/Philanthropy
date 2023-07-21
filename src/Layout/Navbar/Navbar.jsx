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
                    <div className="nav-item"><img src={Logo} alt="" /></div>
                    <div className="nav-item">
                        <ul className="link-box">
                            <li><a className="nav-link" href="#">Home</a></li>
                            <li><a className="nav-link" href="#">About</a></li>
                            <li><a className="nav-link" href="#">Pages</a></li>
                        </ul>
                    </div>
                    <div className="nav-item nav-item-button" > 
                        <div className="nav-btn-box" ><a href="#"><img src={Basket} alt="" /></a></div>
                        <div className="nav-btn-box" ><a className="nav-btn" href="#">Donate</a></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
