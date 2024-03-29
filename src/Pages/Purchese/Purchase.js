import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import './Purchase.css'

const Purchase = () => {
    const navigate= useNavigate()
    const { id } = useParams()
    const [q, setQ]= useState(0)
    const [user] = useAuthState(auth)
    const [error, setErrors] = useState('');
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { isLoading, data: singleProduct } = useQuery(['productId', id], () =>
        fetch(`https://torq-server.onrender.com/product/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    const { _id, name, image, shortDesc, price, minOrder, availableQuantity } = singleProduct;



    const onSubmit = data => {
        data.quantity = q;
        const order = data;

        fetch('https://torq-server.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Successfully placed order')
                    navigate('/dashboard/my-orders')
                    reset()
                } else {
                    toast.error('An error ocurred while placing order')
                }
            })
    };

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-5/6 mx-auto my-12'>
                <div className="card details-box-height shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center md:text-3xl lg:text-3xl text-2xl text-secondary font-bold">Your Product Information</h2>
                        <div className=''>
                            <img className='w-44 mx-auto' src={image} alt="" />
                            <div className="text-center">
                                <h3 className='text-lg font-bold'>Your Product id: {_id}</h3>
                                <h2 className='text-lg font-bold'>{name}</h2>
                                <p>Per Piece Price: {price}$</p>
                                <p>Min. Order: {minOrder} piece</p>
                                <p>Available: {availableQuantity} piece </p>
                                <p>{shortDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center md:text-3xl lg:text-3xl text-2xl text-secondary font-bold">Place Order</h2>
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text text-secondary">Name</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full'
                                type="text"
                                value={user?.displayName}
                                {...register("name", {
                                    required: {
                                        value: true,
                                    }
                                })}
                            />
                            <label className="label">
                                <span className="label-text text-secondary">Email</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full'
                                type="email"
                                value={user.email}
                                {...register("email")}
                            />
                            <label className="label">
                                <span className="label-text text-secondary">Address</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full'
                                type="text"
                                placeholder='Enter your current address'
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Address is required"
                                    }
                                })}
                            />

                            <label className="label">
                                <span className="label-text text-secondary">Phone Number</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full'
                                type="number"
                                placeholder='Enter your active phone number'
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone number is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-error">{errors.phone.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text text-secondary">Product Name</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full'
                                type="text"
                                value={name}
                                {...register("partsName")}
                            />
                            <label className="label">
                                <span className="label-text text-secondary">Price Per Piece</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full'
                                type="text"
                                value={price}
                                {...register("price")}
                            />
                            <label className="label">
                                <span className="label-text text-secondary">Quantity</span>
                            </label>
                            <input
                            onChange={(e)=> setQ(e.target.value)}
                            required
                             className='input input-bordered input-primary w-full' 
                             type="text"
                             placeholder='Enter you quantity'
                             />
                              <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
                                {error && <span className="label-text-alt text-error">{error}</span>}
                            </label>

                            <input className={q > parseInt(availableQuantity) || q < parseInt(minOrder)  ? 'btn-disabled btn btn-secondary w-full text-white mt-7 block' : 'btn btn-secondary w-full text-white mt-7 block'} type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;