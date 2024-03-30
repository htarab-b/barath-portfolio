import React from 'react';
import "./css/Contact.css";
import Header from './Header';
import Contactimage from '../assets/Contact-image.png'

// Social Media Icons
import instagramlogo from "../assets/Social Media/instagram.svg"
import linkedinlogo from "../assets/Social Media/linkedin.svg"
import githublogo from "../assets/Social Media/github.svg"

const Contact = () => {
  return (
    <>
        <Header />
        <div className="contactcontent" style={{ 
                backgroundImage: `url(${Contactimage})`,                
            }}>
            <h1>Reach me through my Social Media Profiles</h1>
            <h2>I look forward to New Projects and Collaborations</h2>
            <div className="box">
                <div className="cards"><a href="http://" target="_blank" rel="noopener noreferrer"><img src={instagramlogo} alt="" width="7%" />Instagram</a></div>
                <div className="cards"><a href="http://" target="_blank" rel="noopener noreferrer"><img src={linkedinlogo} alt="" width="7%" />Linkedin</a></div>
                <div className="cards"><a href="http://" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="" width="7%" className='githublogo' />GitHub</a></div>
            </div>
        </div>
    </>
  )
}

export default Contact