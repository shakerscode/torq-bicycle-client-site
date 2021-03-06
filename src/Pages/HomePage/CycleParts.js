import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const CycleParts = ({ part }) => {
    const navigate = useNavigate()
    const {_id, name, image, shortDesc, minOrder, availableQuantity, price} = part;
    return (
        <div 
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        className="card max-w-sm shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="products" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>{shortDesc.slice(0, 100)}...</p>
                <p className='text-md'>Min. Order: {minOrder} piece</p>
                <p>Available: {availableQuantity}</p>
                <p>Per Pice: {price}$</p>
                <div onClick={()=> navigate(`/purchase/${_id}`)} className="card-actions">
                    <PrimaryBtn>Buy Now</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default CycleParts;