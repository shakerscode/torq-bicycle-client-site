import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile px-5 mt-5 md:mt-0 lg:mt-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            <label for="my-drawer-2" className="btn btn-sm btn-primary text-white mt-4 drawer-button lg:hidden">Menu</label>
                <h1 className='md:text-3xl lg:text-3xl text-xl text-secondary py-5 font-bold'>{user.displayName}, Welcome to your dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                <li><Link className='font-semibold' to='/dashboard'>Profile</Link></li>

                    {
                        admin ? <>
                            <li><Link className='font-semibold' to='/dashboard/users'>Users</Link></li>
                            <li><Link className='font-semibold' to='/dashboard/manage-all-orders'>Manage All Orders</Link></li>
                            <li><Link className='font-semibold' to='/dashboard/add-product'>Add A Product</Link></li>
                            <li><Link className='font-semibold' to='/dashboard/manage-product'>Manage Products</Link></li>
                        </>
                        :
                        <>
                        <li><Link className='font-semibold' to='/dashboard/my-orders'>My Orders</Link></li>
                        <li><Link className='font-semibold' to='/dashboard/add-reviews'>Add Reviews</Link></li>
                        </>
                    } 
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;