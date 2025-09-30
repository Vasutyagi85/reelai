import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import reelaiicon from '../assets/reelaiicon.jpg'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
     navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
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
