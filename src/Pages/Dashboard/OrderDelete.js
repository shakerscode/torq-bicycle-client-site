import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const OrderDelete = ({ deleteModal, refetch, isLoading }) => {
    const id = deleteModal;
    const [yes, setYes] = useState(false)

    useEffect(() => {
        if (yes) {
            fetch(`https://safe-waters-55642.herokuapp.com/user/${id}`, {
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
    }, [yes, id, refetch])

    const deleteOrder = () => {
        setYes(true)
    }
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="delete-modal" className="btn btn-sm btn-circle absolute btn-secondary text-white right-2 top-2">✕</label>
                    <h3 className="font-bold lg:text-lg md:text-lg text-xl mt-10 text-center text-error">Are you sure you want to cancel you order? </h3>
                    <p className="py-4 text-center text-error">Once you click Cancel button your order will be deleted permanently.</p>
                    <div className="modal-action justify-center">
                        <label onClick={deleteOrder} for="delete-modal" className="btn btn-error text-white">Cancel Order</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDelete;