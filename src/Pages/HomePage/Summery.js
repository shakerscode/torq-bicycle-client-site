import React from 'react';

const Summery = ({image, tittle, number}) => {
    return (
        <div 
        
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        className='card items-center justify-center shadow-xl p-5'>
            <div>
                <img className='p-3 bg-sky-100 rounded-full' src={image} alt="company-summery" />
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold py-3'>{number}</h1>
                <p className='text-center text-primary text-lg'>{tittle}</p>
            </div>
        </div>
    );
};

export default Summery;