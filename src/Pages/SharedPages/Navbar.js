import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuLinks = <>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/about'>About</Link></li> 
        <li><Link to='/contact'>Contact</Link></li> 
    </>
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
                <Link className="btn btn-ghost normal-case text-xl md:text-3xl" to='/'>Tork Bicycle</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg">
                    {menuLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar online">
                        <div className="w-10 rounded-full ring ring-white">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt=''/>
                        </div>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                        <li>
                            <Link to='/profile' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;