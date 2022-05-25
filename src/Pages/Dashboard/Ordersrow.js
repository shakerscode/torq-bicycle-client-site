import React from 'react';

const Ordersrow = ({ order, index, setDeleteModal }) => {
    const { _id, name, email, partsName, quantity, price, paymentStatus } = order;
    return (
        <tr className='text-center text-xs'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                {
                    paymentStatus === 'paid' ? '' : <label onClick={() => setDeleteModal(_id)} for="delete-modal" className="btn btn-xs btn-error mr-2">Cancel</label>

                }
                {paymentStatus === 'paid'
                    ?
                    <button className="btn btn-xs btn-disabled btn-success text-black"> Already paid</button>
                    :
                    <button className="btn btn-xs btn-info text-white">Pay</button>
            }
            </td>
        </tr>
    );
};

export default Ordersrow;