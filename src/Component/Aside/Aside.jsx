import React from 'react';
import './Aside.css';

import AsideCardImg from "../../Assets/img/asidecardimg.png";
import AsideCardImg2 from "../../Assets/img/asideimg2.png";
 
export default function Aside() {
  return (
    <>
        <div className="aside">
            <div className="container">
                <h2 className='aside-subtext'>
                    News & Resources
                </h2>
                <p className='aside-text'>
                    Read our latest news
                </p>

                <div className='aside-card-box'>
                    <div className="aside-card">
                        <img className='aside-img' src={AsideCardImg} alt="Img" />
                        <div className='aside-cardbox-box'>
                            <div className='aside-card-text-box'>
                                <p className='aside-text-box'>Articles</p>
                                <p className='aside-text-box'>Feb 11, 2022</p>
                            </div>
                            <p className='aside-card-subtext'>What to donate to a food bank and what to avoid ?</p>
                            <a href='#' className='aside-card-text'>Read <br /> more</a>
                        </div>
                    </div>
                    <div className="aside-card">
                        <img className='aside-img' src={AsideCardImg2} alt="Img" />
                        <div className='aside-cardbox-box'>
                            <div className='aside-card-text-box'>
                                <p className='aside-text-box'>Resources</p>
                                <p className='aside-text-box'>Feb 11, 2022</p>
                            </div>
                            <p className='aside-card-subtext'>13 ways to give to charity without breaking your budget</p>
                            <a href='#' className='aside-card-text'>Read <br /> more</a>
                        </div>
                    </div>
                </div>
                <div className="aside-link-box">
                    <a className='aside-link' href="#">Donate now</a>
                    <a className='aside-link' href="#">Read more news</a>
                </div>
            </div>
        </div>
    </>
  )
}
