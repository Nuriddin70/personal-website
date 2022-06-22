import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className=' fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <image src={Logo} alt="Logo Image" style={{width: '3.125rem'}} />
      </div>

      {/* menu */}
      
        <ul className='hidden md:flex '>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      

      {/* Humberger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='text-xl'>Home</li>
          <li className='py-2 text-xl'>About</li>
          <li className='py-2 text-xl'>Skills</li>
          <li className='py-2 text-xl'>Work</li>
          <li className='text-xl'>Contact</li>
      </ul>

    {/* Social icons */}
    <div className='hidden'> </div>
    </div>
  )
}

export default Navbar