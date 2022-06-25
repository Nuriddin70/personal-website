import React from 'react'
import  {useState} from 'react'
import {HiArrowNarrowRight} from  'react-icons/hi'
import { Link } from 'react-scroll'


const Hero = () =>{
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Conatiner */}
      <div className='max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nuriddin</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a Front-End Developer.</h2>
        <p className='text-[#98a2c7] py-4 max-w-[700px]'> I am focused on leraning responsive web applications. </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
              View Work 
            </Link>
            <span className=' group-hover:rotate-90 duration-500 '>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
            
            </button>
        </div>
      </div>

    </div>
  )
}

export default Hero