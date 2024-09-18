import React from 'react'
import './About.css'
import about_img from '../../assets/about2.jpg'
import white_arrow from '../../assets/white-arrow.png'
import Title from '../Title/Title'

const About = ({setPlayState}) => {
  return (
    
    <div className='about'>
      
      
      
      
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>Voice To Textual Description</h3>
        <a href="https://bobbyhadz.com" target="_blank" rel="noreferrer">
        <button type='submit' className='btn dark-btn'>Click Here To Generate <img src={white_arrow} alt="" /></button>
        </a>
     </div>
     </div>
    
    
  )
}

export default About
