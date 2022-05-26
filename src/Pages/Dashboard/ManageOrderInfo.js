import React from 'react';

const ManageOrderInfo = ({ userOrder, index, setOrderAdminDeleting }) => {
    const { _id, name, email, partsName, price, quantity, paymentStatus } = userOrder;
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
                        <button class="btn btn-sm mr-2 btn-success text-white">Paid</button>
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