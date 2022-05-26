import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUserToken from '../../hooks/useUserToken';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loginLoading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    let location = useLocation();
    const [token] = useUserToken(user);


    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success('Successfully logged in')
        }
    }, [token, from, navigate])

    if (loginLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    let firebaseError;
    if (error) {
        firebaseError = <p className='text-error text-center'><small>{error?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div>
            <div className=''>
                <div className="card md:w-3/6 w-96 mx-auto my-6 md:min-h-screen  shadow-xl">
                    <div className="card-body">
                        <h1 className='text-3xl font-bold text-center text-secondary'>Log In</h1>
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
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

                            {firebaseError}

                            <input className='btn btn-secondary w-full text-white mt-7 block' type="submit" value="Login" />
                        </form>
                        <div>
                            <p className='text-secondary text-center'>Don't have an account? <span onClick={() => navigate('/signup')} className='text-primary font-bold cursor-pointer'>Sign Up!</span></p>
                        </div>
                        <div className="divider text-secondary">Or</div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;