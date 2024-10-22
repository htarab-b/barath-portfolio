import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 lg:pt-24" id="Projects">
      <motion.h1 
        initial = {{ opacity:0 }}
        whileInView = {{ opacity:1 }}
        transition = {{ duration:1, delay:0}}
      
      className="text-4xl sm:text-5xl lg:text-6xl text-center">
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Latest Projects</span>
      </motion.h1>

      <div className="flex p-6 sm:mt-5 sm:w-4/5 lg:w-2/3 gap-7 sm:gap-10 flex-wrap mx-auto">

        <motion.div 
            initial = {{ y:100, opacity:0 }}
            whileInView = {{ y:0, opacity:1 }}
            transition = {{ duration:0.8, delay:0}}
      
        className="relative group cursor-pointer w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <div className="relative p-5 bg-gray-950 ring-1 ring-gray-950/5 rounded-lg leading-none space-x-6">
                <a href='https://srm-fsh-iqac-management.vercel.app/' target={'_blank'}>
                    <div className="rounded-[10px] bg-gray-950">
                        <h3 className="block text-xs lg:text-sm text-gray-400">
                            October 2024
                        </h3>
                        <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-normal leading-5">
                            SRMIST FSH - Events Portal
                        </h3>
                        <p className="mt-4 lg:mt-5 text-xs sm:text-sm">
                            A web-based platform that allows staff and students to submit event proposals online. The system routes them for appropriate approvals from various levels of administration. Ideal for streamlining event management.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Django
                            </span>
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                React JS
                            </span>
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Postgres
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </motion.div>

        <motion.div 
            initial = {{ y:100, opacity:0 }}
            whileInView = {{ y:0, opacity:1 }}
            transition = {{ duration:0.8, delay:0}}
      
        className="relative group cursor-pointer w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <div className="relative p-5 bg-gray-950 ring-1 ring-gray-950/5 rounded-lg leading-none space-x-6">
                <a href='https://github.com/htarab-b/lossless-file-sharing-in-local-network' target={'_blank'}>
                    <div className="rounded-[10px] bg-gray-950">
                        <h3 className="block text-xs lg:text-sm text-gray-400">
                            October 2024
                        </h3>
                        <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-normal leading-5">
                            Lossless File Transfer in Local Network
                        </h3>
                        <p className="mt-4 lg:mt-5 text-xs sm:text-sm">
                            An application that focuses on ensuring reliable, error-free file transmission between two systems connected within the same local network. The system leverages TCP sockets for reliable data delivery and MD5 checksum validation to verify file integrity.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Python
                            </span>
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Sockets
                            </span>
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Tkinter
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </motion.div>

        <motion.div 
            initial = {{ y:100, opacity:0 }}
            whileInView = {{ y:0, opacity:1 }}
            transition = {{ duration:0.8, delay:0}}
      
        className="relative group cursor-pointer w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <div className="relative p-5 bg-gray-950 ring-1 ring-gray-950/5 rounded-lg leading-none space-x-6">
                <a href='https://srm-fsh-classroom-finder.vercel.app/' target={'_blank'}>
                    <div className="rounded-[10px] bg-gray-950">
                        <h3 className="block text-xs lg:text-sm text-gray-400">
                            June 2024
                        </h3>
                        <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-normal leading-5">
                            Classroom Finder
                        </h3>
                        <p className="mt-4 lg:mt-5 text-xs sm:text-sm">
                            A web app for SRMIST, Faculty of Science and Humanities block that allows students and staff to view their lecture schedules. It includes an editor feature for timetable coordinators to manage schedules. Ideal for streamlining classes and lecture management.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                React JS
                            </span>
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Supabase
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Projects
