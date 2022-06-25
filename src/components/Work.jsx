import React from 'react'
import ComingSoon from '../assets/comingSoon.jpg'



const Work = () => {
  return (
    <div name='work' className='w-full   bg-[#0a192f] text-gray-300'>
      <div className=' max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 ' >Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
          
          {/* Grid Item */} 
          <div style={{ backgroundImage: `url(${ComingSoon})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Coming Soon Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${ComingSoon})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Coming Soon Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${ComingSoon})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Coming Soon Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */} 
          <div style={{ backgroundImage: `url(${ComingSoon})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Coming Soon Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
 
          <div style={{ backgroundImage: `url(${ComingSoon})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Coming Soon Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${ComingSoon})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Coming Soon Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Work
