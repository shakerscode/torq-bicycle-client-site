import React from 'react';
import { toast } from 'react-toastify';

const AdminDeleteModal = ({adminModal, refetch, isLoading}) => {
    const id = adminModal;
    const deleteAdminProduct = () =>{
        if(id){
            fetch(`https://torq-server.onrender.com/admin/${id}`,{
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        refetch()
                        toast.success('Successfully deleted')
                    }
                })
    
        }
    }
   
    
            
    return (
        <div className=''>
            <input type="checkbox" id="admin-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="admin-delete-modal" className="btn btn-sm btn-circle absolute btn-secondary text-white right-2 top-2">✕</label>
                    <h3 className="font-bold lg:text-lg md:text-lg text-xl mt-10 text-center text-error">Are you sure you want to delete you item? </h3>
                    
                    <p className="py-4 text-center text-error">Once you click Cancel button your product ({id}) will be deleted permanently.</p>
                    <div onClick={deleteAdminProduct} class="modal-action justify-center">
                        <label for="admin-delete-modal" class="btn btn-md btn-error text-white">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteModal;