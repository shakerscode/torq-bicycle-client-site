import React from 'react';
import customer from '../../images/summery-icon/customer.png';
import reviews from '../../images/summery-icon/rating.png';
import revenue from '../../images/summery-icon/sales.png';
import tools from '../../images/summery-icon/settings.png';
import Summery from './Summery';

const BusinessSummery = () => {
    return (
        <div className='mt-10'>
            <h1
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
             className='uppercase text-center md:text-4xl text-2xl text-secondary font-bold '>Companies Loves Us </h1>
            <p 
            data-aos="zoom-in-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
            className='text-center text-md text-info uppercase'>We gathered lots of love from our buyers</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:w-4/6 mx-auto p-10'>
            <Summery
            image={customer} number={'100+'} tittle={'Customers'}></Summery>
            <Summery
            image={revenue} number={'120M+'} tittle={'Annual Revenue'}></Summery>
            <Summery 
           
            image={reviews} number={'33k'} tittle={'Reviews'}></Summery>
            <Summery
            image={tools} number={'60+'} tittle={'Tools'}></Summery>
        </div>
        </div>
    );
};

export default BusinessSummery;