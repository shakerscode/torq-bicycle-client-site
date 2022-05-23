import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const Contacts = () => {
    return (
        <div class="rounded md:w-3/6 lg:w-3/6 w-5/6 mx-auto max-h-screen flex justify-center items-center my-10 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-3xl font-bold">Contact Us</h2>
                <div className='mt-4'>
                    <label class="label">
                        <span class="label-text">Name</span> 
                    </label>
                    <input type="text" placeholder="Enter your name" class="input input-bordered input-accent w-full" />
                    <label class="label">
                        <span class="label-text">Email</span> 
                    </label>
                    <input type="email" placeholder="Enter your email" class="input input-bordered input-accent w-full mt-3" />
                    <label class="label">
                        <span class="label-text">Enter your message</span> 
                    </label>
                    <textarea class="textarea textarea-secondary w-full mt-3" placeholder="Enter your thought"></textarea>
                </div>
                <div class="card-actions justify-center">
                    <PrimaryBtn>Send</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Contacts;