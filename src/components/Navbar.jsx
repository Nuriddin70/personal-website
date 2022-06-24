import React, {useState} from 'react'
import {FaBars, FaTimes,FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.png"


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className=' fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div><<<<<<< HEAD
        <input type='image' src={Logo} alt="Logo Image" style={{width: '3.125rem'}} />
=======
        <image src={Logo} alt="Logo Image" style={{width: '3.125rem'}} />
>>>>>>> 780d1f2a205e74a0b4af60888e0c843152351d44

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
<<<<<<< HEAD
    <div className='hidden lg:flex fixed flex-col  left-0 top-[35%]'> 
      <ul>
        <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a href="/" className='flex justify-between items-center w-full text-gray-300'>
            Linkedin <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a href="/" className='flex justify-between items-center w-full text-gray-300'>
            Github <FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ef202798]'>
          <a href="/" className='flex justify-between items-center w-full text-gray-300'>
            Email <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#555]'>
          <a href="/" className='flex justify-between items-center w-full text-gray-300'>
            Resume <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>
    </div>
=======
    <div className='hidden'> </div>
    </div>
  )
}

export default Navbar