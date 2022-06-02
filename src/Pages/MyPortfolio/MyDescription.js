import React from 'react';
import myImage from '../../images/MyImage/shaker-ahamed.png';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import portfolioBanner from '../../images/portfolio-bg.png';

const MyDescription = () => {
    return (
        <div 
        className='h-5/6 bg-no-repeat bg-center bg-cover md:flex justify-center items-center mx-auto flex-row-reverse'
        style={{
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            background:`url(${portfolioBanner})`
        }}> 
        <div>
                    <img src={myImage} alt="developer-shaker-ahamed" className='rounded-full w-96 mb-7 shadow-sky-500 md:ml-20' />
                </div>
                <div className='px-5 md:p-0 lg:p-0'>
                    <h4 className='text-xl font-semibold md:text-orange-600 text-white py-3'>Hello, I'm</h4>
                    <h1 className='md:text-5xl text-4xl font-bold md:text-sky-600 text-white py-4'>Shaker Ahamed</h1>
                    <h5 className='my-1 font-lg font-semibold text-white md:text-black'>A <span className='md:text-teal-500 font-bold'>MERN</span> Developer From <span className='md:text-violet-700'>Bangladesh</span></h5>
                    <p className='text-md font-normal py-5 text-white md:text-black'>I'm a MERN stack developer based in Bangladesh,  and I'm very passionate <br /> and dedicated to my work.</p>
                    <div className='pb-4'>
                    <button className='btn px-5 py-2 btn-info text-white'>Read More</button>
                    </div>
                </div>
        </div>
    );
};

export default MyDescription;

// Exploring knowledge is in my blood! I love to gether knowledge about something that I don't know yet. I always search something new to learn. One day, while scrolling internet, I get to know about programing hero. They have course about complete web development. When I saw that, I fill its interesting. Before this, I actually have some interest about programing. Then I thought this course will be a better option form me and after few days I enrolled. I'm Shaker Ahamed from Bangladesh and I am a full time MERN Stack Developer.