import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuLinks = <>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/about'>About</Link></li> 
        <li><Link to='/contact'>Contact</Link></li> 
    </>
    return (
        <div class="navbar bg-primary text-white md:px-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="text-primary menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLinks}
                    </ul>
                </div>
                <Link class="btn btn-ghost normal-case text-xl md:text-3xl" to='/'>Tork Bicycle</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-lg">
                    {menuLinks}
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar online">
                        <div class="w-10 rounded-full ring ring-white">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt=''/>
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                        <li>
                            <Link to='/profile' class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;