import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import AdminDeleteModal from './AdminDeleteModal';
import AdminProducts from './AdminProducts';

const ManageProducts = () => {
    const [adminModal, setAdminModal] = useState(null);
    
    const { isLoading, data: parts, refetch } = useQuery('product', () =>
fetch('https://safe-waters-55642.herokuapp.com/product').then(res =>
  res.json()
)
)
if(isLoading){
  return <LoadingSpinner></LoadingSpinner>
}

return (
    <div className='mt-10'>
        <h1 className='text-center text-secondary text-4xl font-bold'>Manage Your Products</h1>
        <div className="card">
            <div className="card-body mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {
                    parts?.map((part, index) => <AdminProducts 
                    key={index} 
                    part={part} 
                    refetch={refetch}
                    setAdminModal={setAdminModal}
                    ></AdminProducts>)
                }
            </div>
        </div>
        {
        adminModal && <AdminDeleteModal
        adminModal={adminModal}
        refetch={refetch}
        isLoading={isLoading}
        ></AdminDeleteModal>
        }
    </div>
);
};

export default ManageProducts;