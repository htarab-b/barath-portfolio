import React from "react";
import Header from "./Header";
import Typewriter from "typewriter-effect";
import "./css/Home.css";
import HomeImage from "../assets/Home-image.png"


function Home() {
    return(
    <>
        <Header />
        <div className="homecontent" style={{ 
                backgroundImage: `url(${HomeImage})`,                
            }}>
            <h1>Hi, I'm <strong className="name">Barath</strong><br/>I am a
            <strong className="highlight">
                <Typewriter
                    options={{
                        strings: ["Developer", "Designer", "Freelancer"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </strong>
            </h1>
        </div>
    </>
    )
}

export default Home;