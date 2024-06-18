import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { useMediaQuery } from 'react-responsive';

// Front-End
import html5 from '../assets/Tech Stack/html5.svg';
import css3 from '../assets/Tech Stack/css3.svg';
import javascript from '../assets/Tech Stack/javascript.svg';
import react from '../assets/Tech Stack/react.svg';
import vite from '../assets/Tech Stack/vite.svg';
import tailwind from '../assets/Tech Stack/tailwind.svg';

// Back-End
import python from '../assets/Tech Stack/python.svg';
import java from '../assets/Tech Stack/java.svg';
import django from '../assets/Tech Stack/django.svg';
import nodejs from '../assets/Tech Stack/nodejs.svg';
import php from '../assets/Tech Stack/php.svg';

// DBMS
import sqlserver from '../assets/Tech Stack/sqlserver.svg';
import mongodb from '../assets/Tech Stack/mongodb.svg';
import mysql from '../assets/Tech Stack/mysql.svg';
import postgres from '../assets/Tech Stack/postgres.svg';

function Skillstack() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const [speed, setSpeed] = useState(60);

  useEffect(() => {
    setSpeed(isSmallScreen ? 30 : 60);
  }, [isSmallScreen]);

  return (
    <div className="min-h-screen bg-black text-white pt-20 lg:pt-24" id="Skillstack">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center">
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">My Tech Stack</span>
      </h1>
      <p className="sm:hidden px-8 mt-5 text-justify">
        I utilize a wide variety of tools and frameworks to meet the unique requirements of each project, ensuring efficient and effective development.
      </p>

      <div className="mt-10 sm:mt-16 lg:mt-10 flex items-center flex-wrap">
        <h2 className="text-2xl sm:text-3xl text-center w-full">Front-End</h2>
        <div className="w-full lg:w-3/4 mx-auto mt-2">
          <Marquee speed={speed} pauseOnHover gradient gradientColor="black">
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={html5} className="h-14 sm:h-16 lg:h-24" alt="HTML" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">HTML</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={css3} className="h-14 sm:h-16 lg:h-24" alt="CSS" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">CSS</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={javascript} className="h-14 sm:h-16 lg:h-24" alt="JavaScript" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">JavaScript</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={react} className="h-14 sm:h-16 lg:h-24" alt="React" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">React</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={vite} className="h-14 sm:h-16 lg:h-24" alt="Vite" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Vite</h3>
            </div>
            <div className="px-2 sm:px-8 lg:px-12">
              <img src={tailwind} className="h-14 sm:h-16 lg:h-24" alt="Tailwind" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Tailwind</h3>
            </div>
          </Marquee>
        </div>
      </div>

      <div className="mt-10 flex items-center flex-wrap">
        <h2 className="text-2xl sm:text-3xl text-center w-full">Back-End</h2>
        <div className="w-full lg:w-3/4 mx-auto mt-2">
          <Marquee speed={speed} pauseOnHover gradient gradientColor="black">
            <div className="px-4 sm:px-12 lg:px-20">
              <img src={python} className="h-14 sm:h-16 lg:h-24" alt="Python" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Python</h3>
            </div>
            <div className="px-4 sm:px-12 lg:px-20">
              <img src={java} className="h-14 sm:h-16 lg:h-24" alt="Java" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Java</h3>
            </div>
            <div className="px-4 sm:px-12 lg:px-20">
              <img src={django} className="h-14 sm:h-16 lg:h-24" alt="Django" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Django</h3>
            </div>
            <div className="px-4 sm:px-12 lg:px-20">
              <img src={nodejs} className="h-14 sm:h-16 lg:h-24" alt="Node JS" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Node JS</h3>
            </div>
            <div className="px-4 sm:px-12 lg:px-20">
              <img src={php} className="h-14 sm:h-16 lg:h-24" alt="PHP" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">PHP</h3>
            </div>
          </Marquee>
        </div>
      </div>

      <div className="mt-10 flex items-center flex-wrap">
        <h2 className="text-2xl sm:text-3xl text-center w-full">Database Systems</h2>
        <div className="w-full lg:w-3/4 mx-auto mt-2">
          <Marquee speed={speed} pauseOnHover gradient gradientColor="black">
            <div className="px-6 sm:px-16 lg:px-20">
              <img src={sqlserver} className="h-16 sm:h-20 lg:h-28" alt="SQL Server" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">SQL Server</h3>
            </div>
            <div className="px-6 sm:px-16 lg:px-20">
              <img src={mongodb} className="h-16 sm:h-20 lg:h-28" alt="Mongo DB" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Mongo DB</h3>
            </div>
            <div className="px-6 sm:px-16 lg:px-20">
              <img src={mysql} className="h-16 sm:h-20 lg:h-28" alt="MySQL" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">MySQL</h3>
            </div>
            <div className="px-6 sm:px-16 lg:px-20">
              <img src={postgres} className="h-16 sm:h-20 lg:h-28" alt="Postgres" />
              <h3 className="text-center mt-1 text-xs sm:text-sm">Postgres</h3>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skillstack;
