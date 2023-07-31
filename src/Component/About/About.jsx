import React from 'react';
import "./About.css";

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
              </div>

              <div className="about-left"></div>
            </div>
        </div>
      </div>
    </>
  )
}
