import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png' 
const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-text">
        <h1>We Ensure Better Education For Better World!</h1>
        <p>Our Cutting-edge curricuilm is designed to empower students with the knowldge skills and experience needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more<img src={dark_arrow}/></button>
      </div>
    </div>
)}
export default Hero