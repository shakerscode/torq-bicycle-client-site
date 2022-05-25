import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const OrderDelete = ({ deleteModal, refetch }) => {
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
                .then(res=> res.json())
                .then(data=> {
                    if(data.deletedCount){
                        refetch()
                    }
                })
            }
        }, [yes, id]) 
    
    const deleteOrder = () => {
        setYes(true)
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action justify-center">
                        <label onClick={deleteOrder} for="delete-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDelete;