import React from 'react';
import './Testimon.css';

import Testimonimg from "../../Assets/img/testimonimg.png";
import Stiker from "../../Assets/svg/Stiker.svg";

export default function Testimon() {
  return (
    <>
        <div className="testimon">
            <div className="container">
                <div className="testimon-box">
                    <div className="testimon-right">
                        <img src={Testimonimg} alt="" />
                        <div className='testimon-card'>
                            <p className='card-subtext'>
                                “Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.”
                            </p>
                            <p className='testimon-card-text'>
                                Amara Onai
                            </p>
                            <p className='card-title'>
                                Citizen of South Africa
                            </p>
                        </div>
                    </div>
                    <div className="testimon-left">
                        <h2 className='testimon-subtext'>Testimonials</h2>
                        <p className='testimon-text'>See how we are making a difference</p>
                        <p className='testimon-title'>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis etolme netus et malesuada fames urna nec tincidunt praesen</p>
                        <div className='stiker-box'>
                            <img src={Stiker} alt="galochka" />
                            <p className='stiker-text'>Excepteur sint occaecat cupidatat non proident</p>
                        </div>
                        <div className='stiker-box'>
                            <img src={Stiker} alt="galochka" />
                            <p className='stiker-text'>Excepteur sint occaecat cupidatat non proident</p>
                        </div><div className='stiker-box'>
                            <img src={Stiker} alt="galochka" />
                            <p className='stiker-text'>Excepteur sint occaecat cupidatat non proident</p>
                        </div>
                        <a className='testimon-bnt' href="#">Donate now</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
