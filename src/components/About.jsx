import React from 'react'
import "./css/About.css";
import Header from './Header';
import AboutImage from "../assets/About-image.png"

const About = () => {
    return (
    <>
        <Header />
        <div className="aboutmain" style={{ 
                backgroundImage: `url(${AboutImage})`,                
            }}>
            <h1>About Me</h1>
        </div>
        <div className="aboutcontent">
            <p>I am a <strong className='highlight'>Student</strong> currently pursuing my <strong className="highlight">Master's in Computer Science</strong> at SRM Institute of Science and Technology while actively <strong className="highlight">freelancing on the side</strong>. Specializing in <strong className="highlight">Web Development</strong> and personalized <strong className="highlight">Software Applications</strong>, I have successfully completed numerous projects. Additionally, I excel in <strong className="highlight">Design</strong>, crafting eye-catching materials using tools like <strong className="highlight">Canva</strong>. Committed to continuous learning and self-improvement, I am dedicated to delivering excellence in all endeavors.</p>
        </div>
    </>
  )
}

export default About