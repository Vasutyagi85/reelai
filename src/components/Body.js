import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Body = () => {

    const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }
    ])

    useEffect(()=>{//we have to register the user once so it details should be store inside the user only once 
        onAuthStateChanged(auth,(user)=>{
            if(user) {
                const{uid,email,displayName,photoURL}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:user?.photoURL}));
            }else{
                dispatch(removeUser());
            }
        });
    },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body