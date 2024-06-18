import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 lg:pt-24" id='About'>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center"><span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">About Me</span></h1>
      <p className="text-sm sm:text-lg px-6 py-5 sm:px-16 lg:px-40 text-justify">I am a skilled Full-Stack Developer from India, specializing in creating innovative web solutions. With expertise in modern Full-Stack frameworks, I am dedicated to delivering high-quality and efficient web applications. This is what I do</p>
      
      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <h3 className="w-2/5 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7"><span className=" bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent py-6">Web Development</span></h3>
        <p className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">I build innovative and efficient web solutions using modern frameworks to deliver comprehensive and high-quality web applications.</p>
      </div>

      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <h3 className="w-2/5 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7"><span className=" bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent py-6">API Programming</span></h3>
        <p className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">I design and implement robust and scalable APIs to enhance functionality and connectivity of Backend for Web applications.</p>
      </div>

      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <h3 className="w-2/5 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7"><span className=" bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent py-6">Application Development</span></h3>
        <p className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">I create efficient, scalable, and user-friendly applications using modern technologies to deliver seamless experiences across devices.</p>
      </div>

      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <h3 className="w-2/5 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7"><span className=" bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent py-6">Database Management</span></h3>
        <p className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">I create and maintain databases for applications, also design efficient ORMs and ensuring optimal database performance.</p>
      </div>
    </div>
  )
}

export default About
