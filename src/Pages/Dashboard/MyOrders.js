import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import OrderDelete from './OrderDelete';
import Ordersrow from './Ordersrow';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [deleteModal, setDeleteModal] = useState(null)
    const email = user?.email;

    const { isLoading, data: orders, refetch } = useQuery('order', () =>
        fetch(`https://safe-waters-55642.herokuapp.com/order?email=${email}`, {
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
            }else{

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
            <h1 className='text-center text-xl md:text-2xl lg:text-3xl text-secondary font-semibold p-2'>Your Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full" >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment/Cancellation</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            orders?.map((order, index) => <Ordersrow
                                key={order?._id}
                                order={order}
                                index={index}
                                setDeleteModal={setDeleteModal}
                            ></Ordersrow>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
               { deleteModal && <OrderDelete 
               deleteModal={deleteModal}
               refetch={refetch}
               isLoading={isLoading}
               ></OrderDelete>
                   }
            
        </div>
    );
};

export default MyOrders;