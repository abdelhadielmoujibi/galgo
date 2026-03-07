import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search.jsx';
const NavBar = ({darkTheme,setdarkTheme}) => {
  return (
    <div>
    <nav className='flex relative '>
        <div >
            <Link to='/' className=' flex w-30 p-2'>
              <img src="../public/AppLogo.png" alt="logo" />
            </Link>
        </div>
        <button className='absolute right-35 text-center top-2 border-1 rounded-full w-20 p-1 shadow-lg bg-[#7C9EFF] hover:shadow-xl hover:border-none hover:bg-[#FFD166]'  type='button' onClick={()=>{
            setdarkTheme(!darkTheme);
        }}>
           {darkTheme? 'dark 🌙':'light ☀️'}
        </button>
        <Link to='/support'>
         <p className='absolute right-10 top-2 border-1 rounded p-1 shadow-lg bg-[#7C9EFF] hover:shadow-xl hover:border-none hover:bg-[#FFD166] rounded-full w-20 text-center'>Contact</p>
        </Link>
        
    </nav>
    <Search />
    </div>
  );
}

export default NavBar
