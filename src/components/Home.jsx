import React from 'react'
import Typewriter from 'typewriter-effect'

import Mugshot from '../assets/Mugshot.png'
import Mugshot_Graphic from '../assets/Mugshot Graphic.png'

function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-14 sm:flex sm:items-center justify-center" id='Home'>
      <div className="sm:w-1/3 pb-10">
        <h3 className="text-3xl lg:text-5xl text-left sm:text-right pl-24 sm:pl-0">Hi, I am</h3>
        <h1 className="text-8xl lg:text-10xl text-center sm:text-right"><span className="NameFont bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent leading-8">Barath</span></h1>
        <h3 className="text-2xl lg:text-4xl text-right pr-20 sm:pr-0">
          <Typewriter
              options={{
                  strings: [
                    'Developer',
                    'Designer',
                    'Freelancer'
                  ],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 50,
                  backSpeed: 10,
              }}
          />
        </h3>
      </div>

      <div className="relative sm:w-1/2 sm:h-screen flex sm:items-center justify-center sm:pb-10">
          <div className="flex justify-center items-center absolute lg:ml-10 h-fit">
              <img src={Mugshot} className="object-cover z-20 w-96 h-96 lg:w-2/3 lg:h-2/3" />
          </div>
          <div className="flex justify-center items-center absolute lg:ml-10 h-fit">
              <img src={Mugshot_Graphic} className="object-cover z-10 w-96 h-96 lg:w-2/3 lg:h-2/3" />
          </div>
      </div>
    </div>
  )
}

export default Home
