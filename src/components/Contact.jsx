import React, { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white pt-20 lg:pt-24" id="Contact">
      <h1 className="text-5xl lg:text-6xl text-center"><span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Contact Me</span></h1>
      <h2 className="w-10/12 sm:w-4/5 mx-auto text-sm sm:text-base lg:text-lg mt-3 lg:mt-8 text-center">Ready to start your next project? Contact me through my social media profiles. I look forward to collaborating with you!</h2>

      <div className="lg:flex">
        <div className="flex flex-wrap lg:block mt-5 lg:mt-10 px-20 lg:pr-0 items-center justify-center lg:justify-end lg:w-1/3">
            <div className="block lg:flex items-center justify-end gap-5 p-3 lg:py-5">
                <h3 className="hidden lg:flex text-lg">Mail</h3>
                <a href="mailto:barathb.dev@gmail.com">
                    <div className="relative flex p-2 rounded-full items-center justify-center overflow-hidden bg-white text-black transition-all duration-500 before:absolute before:inset-0 before:border-0 before:border-red-500 before:duration-200 before:ease-linear hover:bg-red-500 hover:text-white hover:before:border-[25px]">
                        <svg className="relative z-10 h-7 sm:h-9 lg:h-10 bg-transparent fill-current" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>
                        </svg>
                    </div>
                </a>
            </div>

            <div className="block lg:flex items-center justify-end gap-5 p-3 lg:py-5">
                <h3 className="hidden lg:flex text-lg">Linkedin</h3>
                <a href="https://www.linkedin.com/in/barathbalasundaram/" target='_blank'>
                    <div className="relative flex p-2 rounded-full items-center justify-center overflow-hidden bg-white text-black transition-all duration-500 before:absolute before:inset-0 before:border-0 before:border-blue-500 before:duration-200 before:ease-linear hover:bg-blue-500 hover:text-white hover:before:border-[25px]">
                        <svg className="relative z-10 h-7 sm:h-9 lg:h-10 bg-transparent fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="4.983" cy="5.009" r="2.188"/>
                            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/>
                        </svg>
                    </div>
                </a>
            </div>

            <div className="block lg:flex items-center justify-end gap-5 p-3 lg:py-5">
                <h3 className="hidden lg:flex text-lg">Instagram</h3>
                <a href="https://www.instagram.com/htarab_b/" target='_blank'>
                    <div className="relative flex p-2 rounded-full items-center justify-center overflow-hidden bg-white text-black transition-all duration-500 before:absolute before:inset-0 before:border-0 before:border-pink-600 before:duration-200 before:ease-linear hover:bg-pink-600 hover:text-white hover:before:border-[25px]">
                        <svg className="relative z-10 h-7 sm:h-9 lg:h-10 bg-transparent fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"/>
                        </svg>
                    </div>
                </a>
            </div>

            <div className="block lg:flex items-center justify-end gap-5 p-3 lg:py-5">
                <h3 className="hidden lg:flex text-lg">GitHub</h3>
                <a href="https://github.com/htarab-b" target='_blank'>
                    <div className="relative flex p-2 rounded-full items-center justify-center overflow-hidden bg-white text-black transition-all duration-500 before:absolute before:inset-0 before:border-0 before:border-gray-900 before:duration-200 before:ease-linear hover:bg-gray-900 hover:text-white hover:before:border-[25px]">
                        <svg className="relative z-10 h-7 sm:h-9 lg:h-10 bg-transparent fill-current" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1821.63 637.76c0-130.027-43.627-236.373-116.054-319.68 11.627-30.187 50.347-151.36-11.2-315.307 0 0-94.72-32-310.4 122.134-90.133-26.454-186.773-39.68-282.773-40.107-96 .427-192.64 13.653-282.667 40.107C602.749-29.227 507.923 2.773 507.923 2.773c-61.547 163.947-22.72 285.12-11.094 315.307-72.32 83.307-116.266 189.653-116.266 319.68 0 456.533 263.68 558.72 514.453 588.8 0 0-180.267 111.68-180.267 299.413-64.32 30.507-336.533 123.947-437.333-58.133 0 0-59.627-114.347-173.013-122.773 0 0-110.294-1.494-7.787 72.426 0 0 74.027 36.694 125.44 174.294 0 0 57.173 289.92 489.067 159.68 4.373 2.24 1.6 140.266 1.6 168.533h777.173s1.28-277.013 1.28-365.12c0-216.64-144.64-292.48-185.28-329.28 251.627-29.44 515.733-130.133 515.733-587.84" fillRule="evenodd"/>
                        </svg>
                    </div>
                </a>
            </div>

            <div className="block lg:flex items-center justify-end gap-5 p-3 lg:py-5">
                <h3 className="hidden lg:flex text-lg">Leetcode</h3>
                <a href="https://leetcode.com/u/htarab_b/" target='_blank'>
                    <div className="relative flex p-2 rounded-full items-center justify-center overflow-hidden bg-white text-black transition-all duration-500 before:absolute before:inset-0 before:border-0 before:border-amber-500 before:duration-200 before:ease-linear hover:bg-amber-500 hover:text-white hover:before:border-[25px]">
                        <svg className="relative z-10 h-7 sm:h-9 lg:h-10 bg-transparent fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                        </svg>
                    </div>
                </a>
            </div>

            <div className="block lg:flex items-center justify-end gap-5 p-3 lg:py-5">
                <h3 className="hidden lg:flex text-lg">Codepen</h3>
                <a href="https://codepen.io/htarab-b" target='_blank'>
                    <div className="relative flex p-2 rounded-full items-center justify-center overflow-hidden bg-white text-black transition-all duration-500 before:absolute before:inset-0 before:border-0 before:border-gray-900 before:duration-200 before:ease-linear hover:bg-gray-900 hover:text-white hover:before:border-[25px]">
                        <svg className="relative z-10 h-7 sm:h-9 lg:h-10 bg-transparent fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4265 1.18077C11.7709 0.939744 12.2291 0.939744 12.5735 1.18077L22.5735 8.18077C22.8408 8.3679 23 8.67369 23 9V16C23 16.3263 22.8408 16.6321 22.5735 16.8192L12.5735 23.8192C12.2291 24.0603 11.7709 24.0603 11.4265 23.8192L1.42654 16.8192C1.15921 16.6321 1 16.3263 1 16V9C1 8.67369 1.15921 8.3679 1.42654 8.18077L11.4265 1.18077ZM3 10.9207V14.0793L5.25621 12.5L3 10.9207ZM7 13.7207L3.74379 16L11 21.0793V16.5207L7 13.7207ZM13 16.5207V21.0793L20.2562 16L17 13.7207L13 16.5207ZM18.7438 12.5L21 14.0793V10.9207L18.7438 12.5ZM20.2562 9L17 11.2793L13 8.47934V3.92066L20.2562 9ZM11 3.92066V8.47934L7 11.2793L3.74379 9L11 3.92066ZM12 10.2207L8.74379 12.5L12 14.7793L15.2562 12.5L12 10.2207Z"/>
                        </svg>
                    </div>
                </a>
            </div>

        </div>

        <div className="text-left w-2/3 mt-7 sm:mt-10 lg:my-auto mx-auto lg:pr-20 items-start">
            <h3 className="text-center text-sm sm:text-base lg:text-lg pb-5 sm:pb-8">Or leave a message, I will get back to you</h3>
            <form action='https://docs.google.com/forms/d/e/1FAIpQLSdvG-3uuAZlr_IZw_YT0SSOPylvC4-xMqLzD9OKSJmzD3kpPQ/formResponse' method='post' target="hidden_iframe" onSubmit={() => setSubmitted(true)} className="lg:w-2/3 mx-auto mt-0">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="entry.1621349201" id="Name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" " required disabled={submitted} />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="entry.1661846347" id="Email" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" " required disabled={submitted} />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea name="entry.592867916" id="Message" rows="4" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" " required disabled={submitted}></textarea>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                </div>
                <input type="submit" className="text-black bg-gradient-to-r from-emerald-400 to-cyan-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-5 text-center transition-all duration-300 cursor-pointer" value="Submit" hidden={submitted} />
            </form>
        </div>
      </div>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitted) {
            window.alert('Response Submitted')
          }
        }}
      ></iframe>
    </div>
  )
}

export default Contact
