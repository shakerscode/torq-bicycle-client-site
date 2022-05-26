import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import AdminOrderDelete from './AdminOrderDelete';
import ManageOrderInfo from './ManageOrderInfo';

const ManageOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [adminOrderDeleting, setOrderAdminDeleting] = useState(null)
    const email = user?.email;
    const { isLoading, data: userOrders, refetch } = useQuery('user-orders', () =>
        fetch(`https://safe-waters-55642.herokuapp.com/user-orders?email=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/login')
                signOut(auth);
                localStorage.removeItem('accessToken')
                toast.error('Unauthorized or Forbidden access!')
            } else {

                return res.json()
            }
        }
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h1 className='text-center text-2xl text-secondary font-semibold pb-4'>You have {userOrders.length} {userOrders?.length === 1 ? 'order' : 'orders'}</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full text-center">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment Status / Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userOrders.map((userOrder, index) =>
                                    <ManageOrderInfo
                                        key={index}
                                        userOrder={userOrder}
                                        index={index}
                                        refetch={refetch}
                                        setOrderAdminDeleting={setOrderAdminDeleting}
                                    ></ManageOrderInfo>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
               adminOrderDeleting && <AdminOrderDelete
               adminOrderDeleting={adminOrderDeleting}
               refetch={refetch}
               isLoading={isLoading}
               ></AdminOrderDelete>
            } 
        </div>
    );
};

export default ManageOrders;