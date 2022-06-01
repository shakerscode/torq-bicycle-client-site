import React from 'react';
import emailjs from 'emailjs-com'
import ContactBg from '../../images/contact-bg.jpg'
import { toast } from 'react-toastify';
const Contacts = () => {

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_jy1az2q', 'template_v558y3n', e.target, 'sw6wbCun_nY_xEG9a')
        .then(res =>{
            console.log(res);
            toast.success('Message sent.')
            e.target.reset();
        }).catch(err =>{
            console.log(err);
        })
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
                            <input type="text" placeholder="Enter your name" name='name' className="input input-bordered input-primary w-full" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" placeholder="Enter your email" name='user_email' className="input input-bordered input-primary w-full" />
                            <label className="label">
                                <span className="label-text">Enter your message</span>
                            </label>
                            <textarea required name='message' className="textarea textarea-secondary w-full" placeholder="Enter your thought"></textarea>
                            <input type="submit" value="Send"  className="input input-bordered input-primary bg-primary text-white text-lg w-full uppercase cursor-pointer mt-3" />
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;