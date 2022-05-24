import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div class="drawer drawer-mobile px-5">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='md:text-3xl lg:text-3xl text-xl text-secondary py-5 font-bold'>{user.displayName}, Welcome to your dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    
                    <li><Link className='font-semibold' to='/dashboard'>My Orders</Link></li>
                    <li><Link className='font-semibold' to='/dashboard/add-reviews'>Add Reviews</Link></li> 
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;