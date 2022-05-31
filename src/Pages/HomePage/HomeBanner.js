import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import bannerImg from '../../images/banner-img.png'

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="max-w-xs md:max-w-md lg:max-w-md rounded-lg shadow-2xl" alt='banner'/>
                <div className='pr-10 mt-3'>
                    <h1 className="md:text-4xl lg:text-4xl text-2xl uppercase text-secondary font-bold text-center md:text-left lg:text-left">Get Qualityful Part's <br /> For Bicycle</h1>
                    <p className="py-6 text-md text-center md:text-left lg:text-left">
                     We are one of the best fast growing manufacturer company around the world. We manufacture bicycles parts and wholesale them. We have huge amounts of parts in our collection.
                     </p>
                    <PrimaryBtn>Explore More</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;