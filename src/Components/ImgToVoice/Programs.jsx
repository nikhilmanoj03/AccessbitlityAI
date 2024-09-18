import React from 'react'
import './ImgToVoice.css'

import about_img from '../../assets/about1.png'

import white_arrow from '../../assets/white-arrow.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className="about-left">
      
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>Image To Verbal Description</h3>
        <a href="https://bobbyhadz.com" target="_blank" rel="noreferrer">
        <button type='submit' className='btn dark-btn'>Click Here To Generate <img src={white_arrow} alt="" /></button>
        </a>
        
        
      </div>
        
      </div>
    
  )
}

export default Programs
