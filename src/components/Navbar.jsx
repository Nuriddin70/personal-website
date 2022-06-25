import React, {useState} from 'react'
import {FaBars, FaTimes,FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/nn.png"
import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className=' fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <input type='image' src={Logo} alt="Logo Image" style={{width: '3.125rem'}} />
        {/* <p className='text-4xl font-bold'>NN</p> */}
      </div>
      {/* menu */}
      
        <ul className='hidden md:flex '>
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
            Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
          </li>
          <li>
          <Link to="work" smooth={true} offset={50} duration={500}>
            Work
          </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} offset={50} duration={500}>
          Contact
          </Link>
          </li>
        </ul>
      

      {/* Humberger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='text-xl'> 
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
            Home
            </Link>
          </li>
          <li className='py-2 text-xl'>
            <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className='py-2 text-xl'>
            <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
            Skills
            </Link>
          </li>
          <li className='py-2 text-xl'>
            <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
            Work
            </Link>
          </li>
          <li className='text-xl'>
            <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
      </ul>

    {/* Social icons */}
    <div className='hidden lg:flex fixed flex-col  left-0 top-[35%]'> 
      <ul>
        <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a href="https://linkedin.com/in/nuriddin-nizomiddinov-169126208" className='flex justify-between items-center w-full text-gray-300'>
            Linkedin <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a href="https://github.com/Nuriddin70/" className='flex justify-between items-center w-full text-gray-300'>
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
    </div>
  )
}

export default Navbar