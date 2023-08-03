import React from 'react';
import './Helped.css';

export default function Helped() {
  return (
    <>
          <div className="helped">
              <div className="container">
                  <div className="helped-text-box">
                      <h2 className='helped-subtext' >Take a look at our video</h2>
                      <p className='helped-text'>
                          We have helped over 200 vulnerable communities worldwide
                      </p>
                  </div>
                  <div className="helped-btn-box">
                    <a className='helped-btn' href="#">Donate now</a>
                    <a className='helped-btn' href="#">About our charity</a>
                  </div>
                  <iframe className='helped-video' width="560" height="315" src="https://www.youtube.com/embed/tBTTw5_vgq4" >qergqergre</iframe>
                  
                  <div className="helped-box">
                    <div className='helped-box-text'>
                        <p className='helped-text1'>The goal and mission behind</p>
                        <p className='helped-text2'>
                            Cursus metus aliquam eleifend mi in nulla posuere faucibus interdum posuere lorem ipsum dolor sit amet hendrerit dolor magna eget est lorem. Auctor urna nunc id cursus metus aliquam eleifend. Dictumst quisque sagittis purus sit amet volutpat consequa.
                        </p>
                    </div>
                    <div className='helped-box-text'>
                        <p className='helped-text1'>How our charity got started</p>
                        <p className='helped-text2'>
                            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla posuere sollicitudin pretium aenean pharetra magna ac placerat.
                        </p>
                    </div>
                  </div>
                
              </div>
          </div>
    </>
  )
}
