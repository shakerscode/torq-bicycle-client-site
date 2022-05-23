import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const Purchase = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState('');
    const [errors, setErrors] = useState('');

    const { isLoading, data: singleProduct } = useQuery('productId', () =>
        fetch(`https://safe-waters-55642.herokuapp.com/product/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    const { _id, name, image, shortDesc, price, minOrder, availableQuantity } = singleProduct;

    const getQuantity= (e) =>{
        const orderQuantity = e.target.value;
        setQuantity(orderQuantity);
 
    }

    const handlePlaceOrder = () =>{
        if(quantity > availableQuantity){
            return setErrors('We are not able to provide this amount! Can you please decrease your amount?')
        }
        else if(quantity < minOrder){
            return setErrors('Minimum 100 piece is our criteria')
        }
        console.log(quantity);
        setErrors('')
    }


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-5/6 mx-auto my-12'>
                <div class="card  shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center md:text-3xl lg:text-3xl text-2xl text-secondary font-bold">Your Product Information</h2>
                        <div className=''>
                            <img className='w-44 mx-auto' src={image} alt="" />
                            <div class="text-center">
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
                <div class="card shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center md:text-3xl lg:text-3xl text-2xl text-secondary font-bold">Your Address Information</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card w-3/6 mx-auto my-5 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Place Order</h2>
                    <label class="label">
                        <span class="label-text">Enter Your Order Quantity:</span> 
                    </label>
                    <input type="number" onBlur={getQuantity} placeholder="Enter Your Quantity" defaultValue={minOrder} class="input input-bordered input-info w-full mb-2" />
                    {
                            errors && <p className='text-error text-center'>{errors}</p>
                        }
                    <div onClick={handlePlaceOrder} class="card-actions justify-center">
                        <PrimaryBtn>Place Order</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;