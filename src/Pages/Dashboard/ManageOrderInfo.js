import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderInfo = ({ userOrder, index, setOrderAdminDeleting, refetch }) => {
    const { _id, name, email, partsName, price, quantity, paymentStatus, status } = userOrder;

   
    const updatingStatus = () =>{
        fetch(`https://safe-waters-55642.herokuapp.com/order/updating/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
            .then(data=> {
                if(data){
                    refetch()
                    toast.success('Successfully updated!')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{partsName}</td>
            <td>{quantity} pice</td>
            <td>{price}$</td>
            <td className=''>
                {
                    paymentStatus === 'paid'
                        ?
                        status 
                        ? 
                        <button class="btn btn-xs mr-2 btn-primary text-white">Shipped</button>
                        :
                        <button onClick={updatingStatus} class="btn btn-sm mr-2 btn-success text-white">pending</button>
                        :
                        <>
                        <button class="btn btn-xs mr-2 btn-info text-white">Unpaid</button>
                        </>
                }
                <label for="admin-delete" onClick={() => setOrderAdminDeleting(_id)} class="btn btn-xs mr-2 btn-error">Cancel</label>
            </td>
        </tr>
    );
};

export default ManageOrderInfo;