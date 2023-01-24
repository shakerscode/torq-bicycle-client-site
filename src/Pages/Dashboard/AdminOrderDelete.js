import React, {  useState } from 'react';
import { toast } from 'react-toastify';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const AdminOrderDelete = ({ adminOrderDeleting, refetch, isLoading }) => {
    const id = adminOrderDeleting;
    console.log(id);

    const deleteOrder = () =>{
        if(id){
            fetch(`https://torq-server.onrender.com/admin/order/${id}`,{
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        refetch()
                        toast.success('Successfully canceled')
                    }
                })
    
        }
    }

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <input type="checkbox" id="admin-delete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="admin-delete" className="btn btn-sm btn-circle absolute btn-secondary text-white right-2 top-2">✕</label>
                    <h3 className="font-bold lg:text-lg md:text-lg text-xl mt-10 text-center text-error">Are you sure you want to cancel you order? </h3>
                    <p className="py-4 text-center text-error">Once you click Cancel button this order will be deleted permanently.</p>
                    <div onClick={deleteOrder}  class="modal-action justify-center">
                        <label for="admin-delete" class="btn btn-md mr-2 btn-error text-white">Cancel Order</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrderDelete;