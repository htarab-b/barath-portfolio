import React from 'react'
import Header from './Header'
import "./css/Skillstack.css";
import SkillstackImage from "../assets/Skillstack-image.png";

// Tech Stack Images
// Front-End
import html5image from "../assets/Tech Stack/html5.svg";
import css3image from "../assets/Tech Stack/css3.svg";
import javascriptimage from "../assets/Tech Stack/javascript.svg";
import reactimage from "../assets/Tech Stack/react.svg";
import viteimage from "../assets/Tech Stack/vite.svg";
// Back-End
import pythonimage from "../assets/Tech Stack/python.svg"
import djangoimage from "../assets/Tech Stack/django.svg"
import nodejsimage from "../assets/Tech Stack/nodejs.svg"
import phpimage from "../assets/Tech Stack/php.svg"
import javaimage from "../assets/Tech Stack/java.svg"
// Database
import mysqlimage from "../assets/Tech Stack/mysql.svg"
import sqlserverimage from "../assets/Tech Stack/sqlserver.svg"
import mongodbimage from "../assets/Tech Stack/mongodb.svg"
import postgresqlimage from "../assets/Tech Stack/postgresql.svg"

const Skillstack = () => {
  return (
    <>
        <Header />
        <div className="skillstackmain" style={{ 
                backgroundImage: `url(${SkillstackImage})`,                
            }}>
            <h1>My Tech Stack</h1>
        </div>
        <div className="skillstackcontent">
            <p><strong className="highlight">Front-End Development</strong></p>
            <p>
                <img src={html5image} alt="" width="15%" />
                <img src={css3image} alt="" width="15%" />
                <img src={javascriptimage} alt="" width="12%" />
                <img src={reactimage} alt="" width="12%" />
                <img src={viteimage} alt="" width="12%" />
            </p>
            <p><strong className="highlight">Back-End Development</strong></p>
            <p>
                <img src={pythonimage} alt="" width="12%" />
                <img src={djangoimage} alt="" width="12%" />
                <img src={nodejsimage} alt="" width="12%" />
                <img src={phpimage} alt="" width="12%" />
                <img src={javaimage} alt="" width="12%" />
            </p>
            <p><strong className="highlight">Database Systems</strong></p>
            <p>
                <img src={mysqlimage} alt="" width="15%" />
                <img src={sqlserverimage} alt="" width="15%" />
                <img src={mongodbimage} alt="" width="15%" />
                <img src={postgresqlimage} alt="" width="18%" />
            </p>
        </div>
    </>
  )
}

export default Skillstack