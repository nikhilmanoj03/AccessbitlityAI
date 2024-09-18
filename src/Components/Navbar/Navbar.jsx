import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import Title from './../Title/Title'


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div className="logo"><h1>Accessibility AI</h1></div>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>IMAGE TO VERBAL DESCRIPTION</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>VOICE TO TEXT</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>TEXT TO SPEECH</Link></li>
        <ul className="hidden">
        <li ><Link to='contact' smooth={true} offset={-260} duration={500} className='udayipp'><font color="#212EA0"> Welcome to freeCodeCamp. </font></Link></li>
        </ul>
      </ul>
      
    </nav>
  )
}

export default Navbar
