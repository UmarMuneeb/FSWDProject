import React from 'react'
import loginimage from "../Assets/loginimage.jpg"
import logo from "../Assets/logo.jpg"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate();
  return (
    <div>
            <div className='w-full h-screen flex flex-row font-poppins'>
                <div className='w-7/12'>
                    <div className='w-full pl-10 py-6 flex flex-row justify-start items-center gap-5'>
                        <img src={logo} width="70px"></img>
                        <p className='text-3xl font-bold tracking-wide'>AgriLink</p>
                    </div>
                    <div className='flex w-full h-3/6 pt-24 justify-center items-center flex-col gap-5'>
                        <div>
                            <div>
                                <p className='text-xl font-poppins'>Welcome!</p>
                            </div>
                            <div>
                                <p className='font-poppins text-2xl font-bold'>SignUp To Our Website</p>
                            </div>
                            <div className='pt-4 '>
                                <p className='pb-1'>Email</p>
                                <input type='email' placeholder='Example@gmail.com' className='w-64 border-2 border-black p-1 pl-2 rounded-md'></input>
                            </div>
                            <div className='pt-4'>
                                <p className='pb-1'>Password</p>
                                <input type='email' placeholder='*********' className='w-64 border-2 border-black p-1 pl-2 rounded-md'></input>
                            </div>
                             <div className='pt-4'>
                                <p className='pb-1'>Confirm Password</p>
                                <input type='email' placeholder='*********' className='w-64 border-2 border-black p-1 pl-2 rounded-md'></input>
                            </div>
                            <div className='pt-4'>
                                <button className='w-64 bg-green-500 text-white font-extrabold rounded-md border-black p-1 border-2 ' onClick={()=>navigate('/')}>SignUp</button>
                            </div>
                            <div className='pt-2'>
                                <p className='text-sm font-bold'>Dont Have an Account? <button className='text-blue-600' onClick={()=>navigate('/Login')}>Login</button></p>
                            </div>
    
                        </div>
                    </div>
                </div>
                <div className='w-5/12 '>
                    <div className="bg-cover rounded-l-2xl shadow-lg bg-no-repeat bg-center w-full h-full top-0 left-0"
                            style={{
                              backgroundImage: `url(${loginimage})`,
                              filter: 'brightness(75%)'
                            }}
                          ></div>
                </div>
    
            </div>
        </div>
  )
}

export default Signup