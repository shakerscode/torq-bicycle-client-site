import React from 'react';

const Summery = ({image, tittle, number}) => {
    return (
        <div className='card items-center justify-center shadow-xl p-5'>
            <div>
                <img className='p-3 bg-sky-100 rounded-full' src={image} alt="summery-picture" />
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold py-3'>{number}</h1>
                <p className='text-center text-primary text-lg'>{tittle}</p>
            </div>
        </div>
    );
};

export default Summery;