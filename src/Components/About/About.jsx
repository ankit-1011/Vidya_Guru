import React from 'react'
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon'/>
        </div>
        <div className="about-right">
           <h3>ABOUT UNIVERSITY</h3>
           <h2>Nurture Tomorrow's Leaders Today</h2>
           <p>where innovation meets excellence. Our diverse community, world-class faculty, and state-of-the-art facilities provide an unmatched educational experience. Join us to unlock your potential and shape a brighter future with cutting-edge research, vibrant campus life, and endless opportunities for growth and success.</p>
           <p>where innovation meets excellence. Our diverse community, world-class faculty, and state-of-the-art facilities provide an unmatched educational experience. Join us to unlock your potential and shape a brighter future with cutting-edge research, vibrant campus life, and endless opportunities for growth and success.</p>
           <p>where innovation meets excellence. Our diverse community, world-class faculty, and state-of-the-art facilities provide an unmatched educational experience. Join us to unlock your potential and shape a brighter future with cutting-edge research, vibrant campus life, and endless opportunities for growth and success.</p>
        </div>
    </div>
  )
}

export default About