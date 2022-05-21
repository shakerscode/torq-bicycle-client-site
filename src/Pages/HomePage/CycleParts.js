import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const CycleParts = ({ part }) => {
    const navigate = useNavigate()
    const {name, image, shortDesc, minOrder, availableQuantity, price} = part;
    return (
        <div class="card max-w-sm shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="products" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-gray-500'>{shortDesc.slice(0, 100)}...</p>
                <p className='text-md'>Min. Order: {minOrder} piece</p>
                <p>Available: {availableQuantity}</p>
                <p>Per Pice: {price}$</p>
                <div onClick={()=> navigate('/')} class="card-actions">
                    <PrimaryBtn>Buy Now</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default CycleParts;