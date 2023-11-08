import React from 'react'
import nnHealth from '../assets/nn-health.png'
import organica from '../assets/organica.png'
import centralMovie from '../assets/centralMovie.png'
import weatherApp from '../assets/weatherApp.png'
import todoList from '../assets/todoList.png'
import cryptoBase from '../assets/cryptoBase.png'
import shop from '../assets/shop.png'
import betsEats from '../assets/betsEats.png'






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
          <div style={{ backgroundImage: `url(${nnHealth})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Virtual healthcare
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/Health-Css.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href=" https://nn-health.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${organica})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Organica vegetables
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/OrganicIca-vanillaJS.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://idyllic-puppy-85a047.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${centralMovie})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Central Movie
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/javaScript-project.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://nn-movie.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */} 
          <div style={{ backgroundImage: `url(${weatherApp})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Weather App
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/Weather-App.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://luxury-custard-3a706f.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${todoList})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Todo List
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/anotherTodoListJs.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://nn-crud-todo.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${cryptoBase})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Crypto Base
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/Cripto-base.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://nn-criptobase.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>

          </div>

          <div style={{ backgroundImage: `url(${shop})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Shop
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/Nur-card.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://nur-shop.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
            
          </div>

          <div style={{ backgroundImage: `url(${betsEats})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
          
            {/* Hover Effects */} 
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
              Best Eats
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/Nuriddin70/besr-eats.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://nur-eats.netlify.app/">
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
