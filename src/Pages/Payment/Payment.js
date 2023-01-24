import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51L3fwkFmkazT0hk1yNrof8zmNEclVNNpcb4NL7J98aTAMLrWMNTMsz5eBHfNcL518vpNQNRzAP7Caq5zYjgbRgvn00UiSKAMcu');


const Payment = () => {
    const { id } = useParams()


    const { isLoading, data: payingOrder, refetch } = useQuery(['order-to-pay', id], () =>
        fetch(`https://torq-server.onrender.com/order/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const { name, email, price, quantity, partsName } = payingOrder;

    const totalPrice = parseInt(price) * parseInt(quantity);

    return (
        <div>
            <h1 className='md:text-2xl lg:text-2xl text-xl text-center font-bold text-secondary'>{name}, your product id is {id}</h1>
            <p className='md:text-xl lg:text-xl text-md text-center font-bold text-secondary'>Please proceed your payment</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-5/6 gap-5 mx-auto my-10'>
                <div class="card shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Product Name: {partsName}</h2>
                        <p>Email: {email}</p>
                        <p>Quantity: {quantity} pieces</p>
                        <p>Price per product: {price}$</p>
                        <p>Total Price: {totalPrice}$</p>
                    </div>
                </div>
                <div class="card shadow-xl">
                    <div class="card-body justify-center">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm
                            totalPrice={totalPrice}
                            payingOrder={payingOrder}
                            ></CheckOutForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;