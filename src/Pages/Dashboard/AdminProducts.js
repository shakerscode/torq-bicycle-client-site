import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AdminDeleteModal from './AdminDeleteModal';

const AdminProducts = ({part, setAdminModal}) => {
    const {_id, name, image, shortDesc, minOrder, availableQuantity, price} = part;

    return (
        <div className="card max-w-sm shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="products" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>{shortDesc.slice(0, 100)}...</p>
                <p className='text-md'>Min. Order: {minOrder} piece</p>
                <p>Available: {availableQuantity}</p>
                <p>Per Pice: {price}$</p>
               
                <label 
                onClick={()=> setAdminModal(_id)}
                for="admin-delete-modal" 
                class="btn modal-button btn-md btn-error text-white">Delete</label>
            </div>
        </div>
    );
};

export default AdminProducts;