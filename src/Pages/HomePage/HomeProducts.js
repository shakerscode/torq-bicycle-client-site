import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import CycleParts from './CycleParts';


const HomeProducts = () => { 
    const { isLoading, data: parts } = useQuery('product', () =>
    fetch('https://safe-waters-55642.herokuapp.com/product').then(res =>
      res.json()
    )
  )
  if(isLoading){
      return <LoadingSpinner></LoadingSpinner>
  }

    return (
        <div className='min-h-screen mt-7 md:mt-7 lg:mt-7'>
            <h1 className='text-center md:text-5xl lg:text-5xl text-2xl font-bold text-secondary'>Our Products</h1>
            <div className="card">
                <div className="card-body mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {
                        parts?.map((part, index) => <CycleParts key={index} part={part}></CycleParts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;