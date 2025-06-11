import React from 'react'
import logo from "../Assets/logo.jpg"
import { useNavigate } from 'react-router-dom'
import person from '../Assets/person.jpeg'


const Navbar = () => {
    

  return (
    <>
        <div className='w-full p-2 flex flex-row mx-auto font-poppins' style={{position:'sticky'}}>
            <div className='flex flex-row items-center w-1/2 pl-12 font-bold text-2xl'>
                <img src={logo} className='w-14 pr-2'></img>
                <p>AgriLink</p>
            </div>
            <div className='w-1/2 flex flex-row justify-end items-center pr-12 text-md gap-5'>
                
                <div className=''>
                    <button>About</button>
                </div>
                <div>
                    <button>Contact Us</button>
                </div>
                <div>
                    <button>Products</button>
                </div>
                <div className='flex flex-row gap-4 font-bold text-md items-center bg-green-600 px-4 py-2 rounded-3xl text-white'>
                    <img src={person} className='w-8 rounded-full'></img>
                    <p>Username</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar