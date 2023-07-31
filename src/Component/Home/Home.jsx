import React from 'react'
import "./Home.css";

import HomeImg from '../../Assets/img/homeimg.png';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
            <div className="home-box">
              <div className="home-right">
                  <div className='home-rectangle'></div>
                  <h1 className='home-title'>Giving help to those who need it</h1>
                  <p className='home-subtitle'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                  <div className='homebtn-box'>
                    <a className='home-btn' href="#">Donate now</a>
                    <a className='home-btn' href="#">Donate now</a>
                  </div>
              </div>
              <div className="home-left">
                <img className='home-img' src={HomeImg} alt="" />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
