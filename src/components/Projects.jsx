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
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Featured Projects</span>
      </motion.h1>

      <div className="flex p-6 sm:mt-5 sm:w-4/5 lg:w-2/3 gap-7 sm:gap-10 flex-wrap mx-auto">
        <motion.div 
            initial = {{ y:100, opacity:0 }}
            whileInView = {{ y:0, opacity:1 }}
            transition = {{ duration:0.8, delay:0}}
      
        className="relative group cursor-pointer w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <div className="relative p-5 bg-gray-950 ring-1 ring-gray-950/5 rounded-lg leading-none space-x-6">
                <a href='#Projects'>
                    <div className="rounded-[10px] bg-gray-950">
                        <h3 className="block text-xs lg:text-sm text-gray-400">
                            June 2024
                        </h3>
                        <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-normal leading-5">
                            SRMIST - Classroom Finder Application
                        </h3>
                        <p className="mt-4 lg:mt-5 text-xs sm:text-sm">
                            A web app for SRMIST, Faculty of Science and Humanities block that allows students and staff to view their lecture schedules. It includes an editor feature for timetable coordinators to manage schedules. Ideal for streamlining classes and lecture management.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Django
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
                <a href='#Projects'>
                    <div className="rounded-[10px] bg-gray-950">
                        <h3 className="block text-xs lg:text-sm text-gray-400">
                            March 2024
                        </h3>
                        <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-normal leading-5">
                            TechUtsav - Event Registration Handler
                        </h3>
                        <p className="mt-4 lg:mt-5 text-xs sm:text-sm">
                            For the TechUtsav event, I developed a registration system for the participants and event coordinators. The website handled pre-event and spot registrations, and allowed event coordinators to view participant details for each competition.
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
                <a href='#Projects'>
                    <div className="rounded-[10px] bg-gray-950">
                        <h3 className="block text-xs lg:text-sm text-gray-400">
                            May 2023 (Under Development)
                        </h3>
                        <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-normal leading-5">
                            Bubble Space Chat Application
                        </h3>
                        <p className="mt-4 lg:mt-5 text-xs sm:text-sm">
                            A Chat Application for personal and group chats. Users can create chatrooms, share invite codes, and chat with other users. All messages are end-to-end encrypted and the app features authentication, with API protection through Token systems for security.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                Node JS
                            </span>
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                React JS
                            </span>
                            <span className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs lg:text-sm bg-emerald-400 text-black">
                                MySQL
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
