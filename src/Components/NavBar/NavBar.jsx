import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../../Assets/logo.png.png'; 
import { Link } from 'react-scroll';

export const NavBar = () => {

  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
       window.addEventListener("scroll",()=>{
           window.scrollY >500? setSticky(true):setSticky(false)
       })
  },[])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li><Link to='Hero' smooth={true} offset={0} >Home</Link></li>
        <li><Link to='program' smooth={true} offset={-250}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-200}>Campus</Link></li>
        <li><Link to='testiminonals' smooth={true} offset={-100}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-220}><button className='btn'>Contact Us</button></Link></li>
      </ul>
    </nav>
  );
};
