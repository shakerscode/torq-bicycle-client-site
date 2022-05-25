import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../SharedPages/PrimaryBtn';

const NotFound = () => {
    return (
        <div>
            <div className="card w-4/6 mx-auto max-h-screen justify-center my-10 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-center text-secondary text-3xl font-bold">Unknown Url!!!</h2>
                    <p>The page you want to reach is not valid. Please back to home page or check your url.</p>
                    <p className='text-secondary font-bold text-2xl'>Thank You!</p>
                    <div className="card-actions justify-center">
                        <PrimaryBtn><Link to='/'>Back To Home Page?</Link></PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;