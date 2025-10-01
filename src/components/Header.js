import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import reelaiicon from '../assets/reelaiicon.jpg'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    })
    .catch((error) => {
     navigate("/error");
    });
  };
  useEffect(()=>{//we have to register the user once so it details should be store inside the user only once 
      const unsubscribe=onAuthStateChanged(auth,(user)=>{
              if(user) {
                  const{uid,email,displayName,photoURL}=user;
                  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:user?.photoURL}));
                  navigate("/browse");
              }else{
                  dispatch(removeUser());
                  navigate("/");
              }
          });
          //unsubscribe when component unmounts
          return () =>unsubscribe();
      },[]);
  return (
    <div className='fixed w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-50 shadow-lg'>
      <img 
      className="w-44 "
      src={logo} 
      alt="REELAI Logo" 
      />
      {user &&(
        <div className='flex p-2'>
        <img 
        className="w-12 h-12"
        src={user?.photoURL} 
        alt="reelai user icon"
        />
        <button onClick={handleSignOut}
        className='font-bold text-white'>
          (Sign Out)
        </button>
      </div>
      )}
    </div>
  )
}

export default Header;
