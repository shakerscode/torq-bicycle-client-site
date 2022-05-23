import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import cycle from '../../images/cycle.png'

const HomeAbout = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='ml-5 p-5'>
                    <h1 class="md:text-4xl lg:text-4xl text-2xl font-bold">Largest Bicycle <br /> Manufacturer & Exporter</h1>
                    <p class="py-6 text-justify">Tork Bicycle's primary business is bicycle parts manufacturing. It is Bangladesh’s largest bicycle and parts exporter. The company has been involved in the bicycle industry for the past 38 years. It exports bicycles to the UK, Ireland, Belgium, Germany, Denmark, Sweden, Netherlands, Italy, Finland, Spain and India. It also supplies to local market.</p>
                    <PrimaryBtn>Learn More</PrimaryBtn>
                </div>
                <img src={cycle} class=" rounded-lg shadow-2xl md:ml-10 lg:ml-10" alt='cycle' />

            </div>
        </div>
    );
};

export default HomeAbout;