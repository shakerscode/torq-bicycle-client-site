import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import useUserToken from '../../hooks/useUserToken';
import { toast } from 'react-toastify';
import './Auth.css'

const SignUp = () => { 
    const navigate = useNavigate();
    const [confirmPassError, setConfirmPassError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [token] = useUserToken(user);
    
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success('Successfully sign up')
        }
    }, [token, navigate, from])

    if (loading || updating) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    let firebaseError;
    if (error || updatingError) {
        firebaseError = <p className='text-error text-center'><small>{error?.message}</small></p>

    }



    const onSubmit = async data => {
        if (data.password !== data.confPassword) {
            return setConfirmPassError('Password mismatched')
        }
        else {
            setConfirmPassError('')
        }
        
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name});
    };

    return (
        <div>
            <div className=''>
                <div className="card md:w-3/6 w-80 mx-auto my-6 min-h-screen  shadow-xl">
                    <div className="card-body">
                        <h1 className='text-center text-secondary font-bold text-3xl'>Sign Up</h1>
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text text-secondary">Name</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="text"
                                placeholder='Enter your name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text text-secondary">Email</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="email"
                                placeholder='Enter your email'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Invalid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                            </label>
                             <label className="label">
                                <span className="label-text text-secondary">Password</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="password"
                                placeholder='Enter your password'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum six character needed'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text text-secondary">Confirm Password</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="password"
                                placeholder='Confirm password'
                                {...register("confPassword", {
                                    required: {
                                        value: true,
                                        message: "Please confirm your password"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.confPassword?.type === 'required' && <span className="label-text-alt text-error">{errors.confPassword.message}</span>}
                                {confirmPassError && <span className="label-text-alt text-error">{confirmPassError}</span>}
                            </label>
                            {firebaseError}
                            <input className='btn btn-secondary w-full text-white mt-7 block' type="submit" value="Sign UP" />
                        </form>
                        <div>
                            <p className='text-secondary text-center'>Already have an account? <span onClick={() => navigate('/login')} className='text-primary font-bold cursor-pointer'>Login!</span></p>
                        </div>
                        <div className="divider text-secondary">Or</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;