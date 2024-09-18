import React from 'react'
import './Campus.css'

import white_arrow from '../../assets/white-arrow.png'
import about_img from '../../assets/about3.png'




const Campus = () => {
  return (
    <div className='campus'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>Text To Verbal Description</h3>
        <a href="https://bobbyhadz.com" target="_blank" rel="noreferrer">
        <button type='submit' className='btn dark-btn'>Click Here To Generate <img src={white_arrow} alt="" /></button>
        </a>
     </div>
    </div>
  )
}

export default Campus
