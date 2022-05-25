import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const userEmail = user?.email;

    const { isLoading, data: userData, refetch } = useQuery('users', () =>
        fetch(`https://safe-waters-55642.herokuapp.com/user/${userEmail}`, {
            method: 'GET'
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    refetch()

    const onSubmit = data => {
        fetch(`https://safe-waters-55642.herokuapp.com/user/${userEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res =>
            res.json()
        ).then(data => {
            if (data) {
                toast.success('Successfully updated profile information')
            }
        })
        reset()
    }

    return (
        <div className='md:w-3/6 lg:3/6 w-5/6 mx-auto my-10'>
            <h2 className='text-center lg:text-3xl md:text-xl font-bold'>Your Profile Information</h2>
            <div className="card md:w-5/6 mx-auto my-10 shadow-xl">
                <div className="card-body text-center">
                    <div className="avatar placeholder mx-auto ">
                        <div className="bg-neutral-focus text-neutral-content rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold p-3 text-xl'>{user?.displayName || userData?.name}</h1>
                    <h2 className='font-semibold  text-xl'>Email: {user?.email}</h2>
                    <p className='font-semibold  text-md'>Education: {userData?.education}</p>
                    <p className='font-semibold  text-md'>Location: {userData?.location}</p>
                    <p className='font-semibold  text-md'>Zip/Postal Code: {userData.zip}</p>
                    <p className='font-semibold  text-sm px-2'>imageUrl: {user?.photoURL || userData?.image}</p>
                    <p className='font-semibold  text-sm '>Linkedin: {userData?.linkedin} </p>
                    <p className='font-semibold  text-sm2'>Phone: {userData?.Phone}</p>
                </div>
            </div>
            <h2 className='text-center lg:text-3xl md:text-xl font-bold'>Update Your Profile Information</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text text-secondary">Name</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    defaultValue={user?.displayName}
                    {...register("name", {
                        required: {
                            value: true,
                        }
                    })}
                />
                <label className="label">
                    <span className="label-text text-secondary">Email</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="email"
                    defaultValue={user?.email}
                    {...register("email", {
                        required: {
                            value: true,
                        }
                    })}
                />
                <label className="label">
                    <span className="label-text text-secondary">Education</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter your educational qualification'
                    {...register("education", {
                        required: {
                            value: true,
                        }
                    })}
                />
                <label className="label">
                    <span className="label-text text-secondary">Location</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='City or Town'
                    {...register("location")}
                />
                <label className="label">
                    <span className="label-text text-secondary">Zip Code</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full mb-3'
                    type="number"
                    placeholder='Enter your zip or postal code'
                    {...register("zip", {
                        required: {
                            value: true,
                            message: "Phone number is required"
                        }
                    })}
                />
                <label className="label">
                    <span className="label-text text-secondary">Image Url</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    defaultValue={user?.photoURL}
                    {...register("image")}
                />
                <label className="label">
                    <span className="label-text text-secondary">LinkedIn</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter your linkedin profile'
                    {...register("linkedin")}
                />

                <label className="label">
                    <span className="label-text text-secondary">Phone</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full mb-3'
                    type="number"
                    placeholder='Enter your phone number'
                    {...register("Phone", {
                        required: {
                            value: true,
                            message: "Phone number is required"
                        }
                    })}
                />



                <input className='btn btn-secondary w-full text-white mt-7 block' type="submit" value="Update Your Profile" />
            </form>
        </div>
    );
};

export default MyProfile;