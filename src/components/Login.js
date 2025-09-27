import React from 'react'
import Header from './Header'
import ReelAILogo from '../assets/reelai.png';
import { useState } from 'react';

const Login = () => {
  
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header/>
    <div className='absolute'>
      <img className="w-screen"src={ReelAILogo} alt="REELAI Logo" />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>

      {!isSignInForm && (<input 
      type="text" 
      placeholder='Name' 
      className='p-4 my-4 w-full bg-gray-700'/>)}

      <input 
      type="text" 
      placeholder='Email Address' 
      className='p-4 my-4 w-full bg-gray-700'/>
      <input 
      type="password" 
      placeholder='Password' 
      className='p-4 my-4 w-full bg-gray-700'/>
      <button 
      className='p-4 my-6 bg-red-700 w-full'>
      {isSignInForm ? "Sign In":"Sign Up"}
      </button>
      <p 
      className='py-4' onClick={toggleSignInForm}>
      {isSignInForm ? "New to Netflix? Sign Up Now":
      "Already Registered! Sign In Now"}
      </p>
    </form>
    </div>
  )
}

export default Login