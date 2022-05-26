import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const MyInformation = () => {
    return (
        <div>
            <h1 className='text-center md:text-3xl text-2xl text-primary font-semibold py-2'>My Information</h1>
            <div class="card md:w-3/6 mg:w-3/6 w-5/6 mx-auto my-5 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hello,</h2>
                    <p>Get some additional information about me!</p>
                    <div className='px-2'>
                        <h2 className='pb-2 font-semibold'>Name: Shaker Ahamed</h2>
                        <p className='pb-2 font-semibold'>Email: ahamedshaker7@gmail.com</p>
                        <p className='pb-2 font-semibold'>Address: Noakhali, Bangladesh</p>
                        <p className='pb-2 font-semibold'>Education: Studying. B.Sc. in Zoology. 2nd Year. </p>
                        <p className='pb-2 font-semibold'>My Skills: HTML, CSS, BOOTSTRAP, TAILWIND, DAISY UI, JAVASCRIPT, REACT.JS, FIREBASE AUTH, NODE.JS, EXPRESS.JS, MONGODB, BASIC JWT etc.</p>
                        <p className='pb-2 font-semibold'>My Live Projects: <br />
                            <a href='https://beautiful-crepe-8900e6.netlify.app' className='pl-3 text-secondary font-bold'>1. Tutors Website (updating)</a> <br />
                            <a href='https://educational-website-by-shaker-ahamed.netlify.app/' className='pl-3 text-secondary font-bold'>2. An Educational Website (updating)</a> <br />
                            <a href='https://glowing-tarsier-f0a321.netlify.app/' className='pl-3 text-secondary font-bold'>3. A Hotel Website(updating)</a>
                        </p>
                    </div>
                    <div class="card-actions justify-center">
                        <PrimaryBtn>Get My CV</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInformation;