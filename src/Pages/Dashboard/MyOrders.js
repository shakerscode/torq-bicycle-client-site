import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;

    const { isLoading, data: orders } = useQuery('order', () =>
        fetch(`https://safe-waters-55642.herokuapp.com/order?email=${email}`, {
            method: 'GET'
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h1 className='text-center text-xl md:text-2xl lg:text-3xl text-secondary font-semibold'>Your Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
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
                            orders?.map((order, index) =>
                            <tr className='text-center text-xs'>
                            <th>{index + 1}</th>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order.partsName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>
                            <button class="btn btn-xs btn-error mr-2">Cancel</button>
                            <button class="btn btn-xs btn-success text-white">Pay</button>
                            </td>
                        </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;