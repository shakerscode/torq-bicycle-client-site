import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const Contacts = () => {
    return (
        <div className="rounded md:w-3/6 lg:w-3/6 w-5/6 mx-auto max-h-screen flex justify-center items-center my-10 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-3xl font-bold">Contact Us</h2>
                <div className='mt-4'>
                    <label className="label">
                        <span className="label-text">Name</span> 
                    </label>
                    <input type="text" placeholder="Enter your name" className="input input-bordered input-accent w-full" />
                    <label className="label">
                        <span className="label-text">Email</span> 
                    </label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered input-accent w-full mt-3" />
                    <label className="label">
                        <span className="label-text">Enter your message</span> 
                    </label>
                    <textarea className="textarea textarea-secondary w-full mt-3" placeholder="Enter your thought"></textarea>
                </div>
                <div className="card-actions justify-center">
                    <PrimaryBtn>Send</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Contacts;