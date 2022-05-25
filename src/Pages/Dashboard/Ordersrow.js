import React from 'react';

const Ordersrow = ({ order, index, setDeleteModal }) => {
     const {_id, name, email, partsName, quantity, price } = order;
    return (
        <tr className='text-center text-xs'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
            <label onClick={()=> setDeleteModal(_id)} for="delete-modal" className="btn btn-xs btn-error mr-2">Cancel</label>
                <button className="btn btn-xs btn-success text-white">Pay</button>
            </td>
        </tr>
    );
};

export default Ordersrow;