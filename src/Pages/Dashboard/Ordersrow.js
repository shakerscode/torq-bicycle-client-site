import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Ordersrow = ({ order, index, setDeleteModal }) => {
    const { _id, name, email, partsName, quantity, price, paymentStatus, transactionId } = order;
    return (
        <tr className='text-center text-sm'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                {paymentStatus === 'paid'
                    ?
                    <>
                    <p className='pb-3'>Transaction Id: {transactionId}</p>
                    <button className="btn btn-xs btn-disabled btn-success text-black"> Already paid</button>
                    </>
                    :
                    <>
                    <label onClick={() => setDeleteModal(_id)} for="delete-modal" className="btn btn-xs btn-error mr-2">Cancel</label>

                    <button  className="btn btn-xs btn-info text-white"><Link  to={`/dashboard/payment/${_id}`}>Pay</Link></button>
                    </>
            }
            </td>
        </tr>
    );
};

export default Ordersrow;