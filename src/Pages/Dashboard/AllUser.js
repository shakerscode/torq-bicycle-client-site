import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const AllUser = ({ user, index, refetch }) => {
    const { email } = user;

    const makeUserAdmin = () => {
        fetch(`https://torq-server.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    console.log(res.status);
                    toast.error('You are not able to make someone admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made an admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.name ? user.name : 'Unknown User'}</td>
            <td>{user.email}</td>
            <td>
                {
                    user.role !== 'admin'
                        ?
                        <button onClick={makeUserAdmin}   className="btn btn-xs btn-secondary text-white">Make Admin</button>
                        :
                        <button   className="btn btn-xs btn-success text-white">Already Admin</button>
                }
            </td>
        </tr>
    );
};

export default AllUser;