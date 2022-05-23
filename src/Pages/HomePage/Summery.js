import React from 'react';

const Summery = ({image, tittle, number}) => {
    return (
        <div className='card items-center justify-center shadow-xl p-5'>
            <div>
                <img className='p-3 bg-sky-200 rounded-full' src={image} alt="summery-picture" />
            </div>
            <div>
                <h1 className='text-center text-3xl'>{number}</h1>
                <p className='text-center'>{tittle}</p>
            </div>
        </div>
    );
};

export default Summery;