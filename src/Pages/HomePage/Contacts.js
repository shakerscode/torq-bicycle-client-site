import React from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import ContactBg from '../../images/contact-bg.jpg'
import sendIcon from '../../images/send.png';
const Contacts = () => {

    const sendEmail = (e) =>{
        e.preventDefault()
    }

    return (
        <div style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            background: `url(${ContactBg})`
        }}
            className='w-full h-[600px] flex justify-center items-center'
        >
            <div class="card md:w-2/4 lg:w-2/4 w-96 bg-base-100 shadow-xl">
                <div class="card-body ">
                    <h1 className='md:text-3xl text-xl font-bold text-center text-secondary uppercase'>Contact Us</h1>
                   <form onSubmit={sendEmail}>
                   <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered input-primary w-full" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" placeholder="Enter your email" className="input input-bordered input-primary w-full" />
                            <label className="label">
                                <span className="label-text">Enter your message</span>
                            </label>
                            <textarea required className="textarea textarea-secondary w-full" placeholder="Enter your thought"></textarea>
                            <input type="submit" value="Send" className="input input-bordered input-primary bg-primary text-white text-lg w-full uppercase cursor-pointer mt-3" />
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;