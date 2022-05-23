import React from 'react';
import customer from '../../images/summery-icon/customer.png';
import reviews from '../../images/summery-icon/rating.png';
import revenue from '../../images/summery-icon/sales.png';
import tools from '../../images/summery-icon/settings.png';
import Summery from './Summery';

const BusinessSummery = () => {
    return (
        <div>
            <h1 className='uppercase text-center md:text-4xl text-2xl text-secondary font-bold md:p-10'>Companies Loves Us </h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:w-4/6 mx-auto p-10'>
            <Summery image={customer} number={'100+'} tittle={'Customers'}></Summery>
            <Summery image={revenue} number={'120M+'} tittle={'Annual Revenue'}></Summery>
            <Summery image={reviews} number={'33k'} tittle={'Reviews'}></Summery>
            <Summery image={tools} number={'60+'} tittle={'Tools'}></Summery>
        </div>
        </div>
    );
};

export default BusinessSummery;