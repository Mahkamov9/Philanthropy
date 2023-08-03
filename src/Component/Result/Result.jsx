import React from 'react';
import "./Result.css";

import Cardsvg1 from "../../Assets/svg/cardsvg1.svg";
import Cardsvg2 from "../../Assets/svg/cardsvg2.svg";
import Cardsvg3 from "../../Assets/svg/cardsvg3.svg";
import Cardsvg4 from "../../Assets/svg/cardsvg4.svg";
import ResultImg from "../../Assets/img/result.png";

export default function Result() {
  return (
    <>
        <div className="result">
            <div className="container">
                <div className="result-box">
                    <div className="result-right">
                        <h2 className='result-subtext'>OUR RESULTS</h2>
                        <p className='result-text'>
                            Take a look at the big impact we have done
                        </p>
                        <div className="result-card-box">
                            <div className="result-card">
                                <img src={Cardsvg1} alt="rasm" />
                                <div className='card-text-box'>
                                    <p className='card-text1'>500m</p>
                                    <p className='card-text2'>Liters of water</p>
                                </div>
                            </div>

                            <div className="result-card">
                                <img src={Cardsvg2} alt="rasm" />
                                <div className='card-text-box'>
                                    <p className='card-text1'>7000+</p>
                                    <p className='card-text2'>Houses built</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-card-box">
                            <div className="result-card">
                                <img src={Cardsvg3} alt="rasm" />
                                <div className='card-text-box'>
                                    <p className='card-text1'>10,000+</p>
                                    <p className='card-text2'>Toys delivered</p>
                                </div>
                            </div>

                            <div className="result-card">
                                <img src={Cardsvg4} alt="rasm" />
                                <div className='card-text-box'>
                                    <p className='card-text1'>2000+</p>
                                    <p className='card-text2'>Schools built</p>
                                </div>
                            </div>
                        </div>

                        <a className='home-btn' href="">Donate now</a>
                    </div>
                    <div className="result-ledt">
                        <img className='result-img' src={ResultImg} alt="resm" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
