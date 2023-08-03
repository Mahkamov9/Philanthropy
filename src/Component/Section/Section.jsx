import React from 'react';
import './Section.css';

import Cardimg1 from "../../Assets/svg/cardimg1.svg";

export default function Section() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <h2 className='section-subtext'>
                        How we help?
                    </h2>
                    <div className='section-text-box'>
                        <p className='section-text'>What are we doing to assist these communities?</p>
                        <a className='section-btn' href="#">Donate now</a>
                    </div>
                    <div className="section-card-box">
                        <div className="card-box">
                            <img src={Cardimg1} alt="rasm" />
                            <p className='card-subtext'>House & shelter</p>
                            <p className='card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                        </div>
                        <div className="card-box">
                            <img src={Cardimg1} alt="rasm" />
                            <p className='card-subtext'>House & shelter</p>
                            <p className='card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                        </div>
                        <div className="card-box">
                            <img src={Cardimg1} alt="rasm" />
                            <p className='card-subtext'>House & shelter</p>
                            <p className='card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                        </div>
                    </div>
                    <div className="section-card-box">
                        <div className="card-box">
                            <img src={Cardimg1} alt="rasm" />
                            <p className='card-subtext'>House & shelter</p>
                            <p className='card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                        </div>
                        <div className="card-box">
                            <img src={Cardimg1} alt="rasm" />
                            <p className='card-subtext'>House & shelter</p>
                            <p className='card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                        </div>
                        <div className="card-box">
                            <img src={Cardimg1} alt="rasm" />
                            <p className='card-subtext'>House & shelter</p>
                            <p className='card-text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                        </div>
                    </div>

                    <div className='section-rectangle'>
                        <p className='rectang-text'>
                            Join us and let’s make a better world, today
                        </p>
                        <div className='rectang-box'>
                            <a className='rectang-btn' href="#">Donate now</a>
                            <a className='rectang-btn' href="#">About our charity</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
