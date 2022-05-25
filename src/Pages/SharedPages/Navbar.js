import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from './LoadingSpinner';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const menuLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-us'>About</Link></li>
        <li><Link to='/contact-us'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        {user && <li><Link to='/my-profile'>Profile</Link></li>}
    </>

const logOutUser = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
    toast.success('Log out successful!')
  };
  

    return (
        <div className="navbar bg-primary text-white md:px-10 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="text-primary menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl md:text-3xl" to='/'>Torq Bicycle</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg">
                    {menuLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user 
                    ? 
                    <>
                    <label for="my-drawer-2" className="btn btn-sm btn-primary text-white mr-2 drawer-button lg:hidden">Dashboard</label>

                     <button for="my-drawer-2" className="btn btn-sm btn-secondary text-white hidden lg:block md:mr-10 lg:mr-10 mr-3"><Link to='/dashboard'>Dashboard</Link></button>

                    </>                   
                     :
                    <button className="btn btn-xs sm:btn-sm md:btn-md  btn-secondary text-white mr-10 "><Link to='/login'>Login</Link></button>
                }


                {
                    user && 
                    <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar online">
                        <div className="w-10 rounded-full ring ring-white">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                        <li>
                            <Link to='/my-profile' className="justify-between">
                                Profile
                                
                            </Link>
                        </li>
                                <li><Link to='/dashboard'>Dashboard</Link></li>                               
                                <li><Link onClick={logOutUser} to='/login'>Logout</Link></li>                  
                    </ul>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;