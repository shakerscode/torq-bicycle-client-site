import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import bannerImg from '../../images/banner-img.png'

const HomeBanner = () => {
    return (
        <div className="hero md:min-h-screen  lg:min-h-screen max-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="min-w-md md:max-w-md lg:max-w-md rounded-lg shadow-2xl" alt='banner'/>
                <div className='pr-10'>
                    <h1 className="md:text-4xl lg:text-4xl text-2xl font-bold">Get Qualityful Part's <br /> For Bicycle</h1>
                    <p className="py-6 text-justify text-md">
                     We are one of the best fast growing manufacturer company around the world. We manufacture bicycles parts and wholesale them. We have huge amounts of parts in our collection.
                     </p>
                    <PrimaryBtn>Explore More</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;