import React, { useEffect, useState } from 'react';
import CycleParts from './CycleParts';

const HomeProducts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className=''>
            <h1 className='text-center text-black text-4xl font-bold'>Our Products</h1>
            <div class="card">
                <div class="card-body mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {
                    parts.map((part, index) => <CycleParts key={index} part={part}></CycleParts>)
                }
                </div>
            </div> 
        </div>
    );
};

export default HomeProducts;