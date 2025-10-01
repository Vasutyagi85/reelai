import React, { useRef } from 'react'
import Header from './Header'
import ReelAILogo from '../assets/reelai.png';
import avatar from '../assets/avatar.png';
import { useState } from 'react';
import { checkValidData } from '../utils/validate';
import { updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'


const Login = () => {

  
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage,seterrorMessage]= useState(null);
  const Navigate=useNavigate();
  const dispatch=useDispatch();

  const email=useRef(null);//whatever we will enter email field we get reference 
  const password=useRef(null);
  const name=useRef(null);

  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick=()=>{
    //validation 
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message=checkValidData(email.current.value,password.current.value)
    seterrorMessage(message);

    if(!isSignInForm){
    createUserWithEmailAndPassword(
      auth, 
      email.current.value,
      password.current.value
    )

  .then((userCredential) => {
    const user = userCredential.user;

    updateProfile(user, {
    displayName: name.current.value, 
    photoURL:avatar,
    })
    .then((userCredential) => {
      const{uid,email,displayName,photoURL}=auth.currentUser;
      //instead of taking value from the old user it should be taken from updated user which is currentUser 
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
      })
      );
      Navigate("/browse")

    }).catch((error) => {
      seterrorMessage(error.message);
    });//whenver we sign in navigate to browse
    })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage);
    });
    }

    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
    })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode + "-"  + errorMessage)
    });
    }
  };

  return (
    <div>
      <Header/>
    <div className='absolute'>
      <img className="w-screen"src={ReelAILogo} alt="REELAI Logo" />
    </div>

    <form 
    onSubmit={(e)=>{e.preventDefault()}}
    className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>

    <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>

      {!isSignInForm && (<input 
      ref={name}
      type="text" 
      placeholder='Name' 
      className='p-4 my-4 w-full bg-gray-700'/>)}

      <input 
      ref={email}
      type="text" 
      placeholder='Email Address' 
      className='p-4 my-4 w-full bg-gray-700'/>

      <input
      ref={password} 
      type="password" 
      placeholder='Password' 
      className='p-4 my-4 w-full bg-gray-700'/>

      <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

      <button 
      className='p-4 my-6 bg-red-700 w-full' onClick={handleButtonClick}>
      {isSignInForm ? "Sign In":"Sign Up"}
      </button>
      <p 
      className='py-4' onClick={toggleSignInForm}>
      {isSignInForm ? "New to ReelAI? Sign Up Now":
      "Already Registered! Sign In Now"}
      </p>
    </form>
    </div>
  )
}

export default Login