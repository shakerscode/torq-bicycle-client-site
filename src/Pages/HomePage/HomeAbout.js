import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import cycle from '../../images/cycle.png'

const HomeAbout = () => {
    return ( 
        <div className="md:p-5 mb-0 pb-0 mt-3 lg:mt-0 md:lg-0">
            <div className="hero-content md:flex-col flex-col-reverse lg:flex-row-reverse">
                <div className='md:ml-5'>
                    <h1 className="md:text-4xl lg:text-4xl text-2xl font-bold text-secondary uppercase text-md text-center md:text-left lg:text-left mt-5 md:mt-0 lg:mt-0">Largest Bicycle <br /> Manufacturer & Exporter</h1>
                    <p className="py-6 text-md text-center md:text-left lg:text-left">Tork Bicycle's primary business is bicycle parts manufacturing. It is Bangladesh’s largest bicycle and parts exporter. The company has been involved in the bicycle industry for the past 38 years. It exports bicycles to the UK, Ireland, Belgium, Germany, Denmark, Sweden, Netherlands, Italy, Finland, Spain and India. It also supplies to local market.</p>
                    <PrimaryBtn>Learn More</PrimaryBtn>
                </div>
                <img src={cycle} className=" rounded-lg shadow-2xl md:ml-10 lg:ml-10" alt='cycle' />

            </div>
        </div>
    );
};

export default HomeAbout;