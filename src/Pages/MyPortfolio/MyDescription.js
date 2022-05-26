import React from 'react';
import myImage from '../../images/MyImage/shaker-ahamed.jpg';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const MyDescription = () => {
    return (
        <div>
            <div class="hero py-10">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={myImage} class="md:max-w-sm max-w-xs rounded-lg shadow-xl md:ml-8" alt='shaker-ahamed'/>
                    <div className='md:pl-10 md:ml-12'>
                        <h1 class="md:text-4xl lg:text-4xl mt-5 md:mt-0 text-center  lg:text-start lg:mt-0 text-xl font-bold uppercase">Hello, Shaker Ahamed here!</h1>
                        <p className='py-5 px-2'>Exploring knowledge is in my blood! I love to gether knowledge about something that I don't know yet. I always search something new to learn. One day, while scrolling internet, I get to know about programing hero. They have course about complete web development. When I saw that, I fill its interesting. Before this, I actually have some interest about programing. Then I thought this course will be a better option form me and after few days I enrolled. I'm Shaker Ahamed from Bangladesh and I am a full time MERN Stack Developer.</p>
                        <div class="card-actions md:justify-start justify-center">
                        <PrimaryBtn>Explore More</PrimaryBtn>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MyDescription;