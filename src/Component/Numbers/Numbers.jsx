import React from 'react';
import "./Numbers.css";

export default function Numbers() {
  return (
    <>
      <div className="numbers">
        <div className="container">
          <div className="num-list">
            <div className='num-item'>
              <h3 className='num-item-text'>200 <span className='num-span'>m</span> </h3>
              <p className='num-item-subtext'>Human inpacet</p>
            </div>

            <div className='num-item'>
              <h3 className='num-item-text'>50 <span className='num-span'>k</span> </h3>
              <p className='num-item-subtext'>Collaborators</p>
            </div>

            <div className='num-item'>
              <h3 className='num-item-text'>370 <span className='num-span'>k</span> </h3>
              <p className='num-item-subtext'>Donations</p>
            </div>

            <div className='num-item'>
              <h3 className='num-item-text'>100 <span className='num-span'>+</span> </h3>
              <p className='num-item-subtext'>Assisted communities</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
