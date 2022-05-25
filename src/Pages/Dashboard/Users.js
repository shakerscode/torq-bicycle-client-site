import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import AllUser from './AllUser';

const Users = () => {
    const { isLoading, data: users, refetch } = useQuery('users', () =>
        fetch('https://safe-waters-55642.herokuapp.com/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold py-3'>You have {users.length} users</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full"> 
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AllUser 
                            key={index} 
                            index={index} 
                            user={user}
                            refetch={refetch}
                            ></AllUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;