import React from 'react';
import "./About.css";

import Aboutimg1 from '../../Assets/img/aboutimg1.png';
import Aboutimg2 from '../../Assets/img/aboutimg2.png';
import Aboutimg3 from '../../Assets/img/aboutimg3.png';

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <p className='about-title'>About Us</p>

          <div className="about-box">
            <div className="about-right">
              <h2 className='aboutrg-subtext'>
                We are here to support vulnerable communities
              </h2>
              <p className='aboutlf-text'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua molestie a iaculis at erat pellentesque adipiscing commodo elit at.
              </p>
              <div className="about-img-box">
                <img className='about-img1' src={Aboutimg1} alt="rasm" />
                <img className='about-img2' src={Aboutimg2} alt="rasm" />
              </div>
            </div>

            <div className="about-left">
              <div className="about-btn-box">
                <a className='home-btn' href="#">Donate now</a>
                <a className='home-btn' href="#">About Us</a>
              </div>
              <img className='about-img3' src={Aboutimg3} alt="rasm" />
              <p className='about-right-subtext'>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla posuere sollicitudin pretium aenean pharetra magna ac placerat.
              </p>
              <div>
                <p className='about-right-text'>Excepteur sint occaecat cupidatat non proident</p>
                <p className='about-right-text'>Excepteur sint occaecat cupidatat non proident</p>
                <p className='about-right-text'>Excepteur sint occaecat cupidatat non proident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
