import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import profile from '../../images/profile.png'
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import emailImage from '../../images/profile-icon/mail.png'
import educationImage from '../../images/profile-icon/education.png';
import linkedinImage from '../../images/profile-icon/linkedin.png';
import zipCodeImage from '../../images/profile-icon/zip.png';
import phoneImage from '../../images/profile-icon/phone.png';
import locationImage from '../../images/profile-icon/location.png';
import './profile.css'

const MyProfile = () => {
    const [updatingInfo, setUpdatingInfo] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
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
    const imageBBApiKey = 'de62d9074dfab95edf03c827f18def4b';

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.photo[0])
        const url = `https://api.imgbb.com/1/upload?key=${imageBBApiKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    data.photo = result.data.url;
                    updateProfile({ displayName: data.name, photoURL: data.photo });

                    fetch(`https://safe-waters-55642.herokuapp.com/user/${userEmail}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(res =>
                        res.json()
                    ).then(data => {
                        if (data) {
                            console.log(data);
                            toast.success('Successfully updated profile information')
                        }
                    })
                    reset()

                } else {
                    toast.error(result.status, 'Problem with uploading image')
                }
            })
    }


    const updateInfo = () => {
        setUpdatingInfo(!updatingInfo)

    }

    return (
        <div className='md:w-3/6 lg:3/6 w-5/6 mx-auto my-10'>
            <h2 className='text-center lg:text-3xl md:text-xl font-bold'>Your Profile Information</h2>
            <div className="card md:w-5/6 mx-auto my-10 shadow-xl">
                <div className="card-body text-center">
                    <div className="avatar placeholder mx-auto ">
                        <div className="bg-neutral-focus text-neutral-content rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12">
                            <img src={userData?.photo || user.photoURL? userData?.photo || user.photoURL : profile} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold p-3 text-2xl'>{user?.displayName || userData?.name}</h1>
                    <div className='div-items'>
                        <img src={emailImage} alt="" className='' />
                        <p className=''>{user?.email}</p>
                    </div>
                    <div className='div-items'>
                        <img src={educationImage} alt="" className='' />
                        <p className=''>{userData?.education}</p>
                    </div>
                    <div className='div-items'>
                        <img src={locationImage} alt="" className='' />
                        <p className=''>{userData?.location}</p>
                    </div>
                    <div className='div-items'>
                        <img src={zipCodeImage} alt="" className='' />
                        <p className=''> {userData?.zip}</p>
                    </div>
                    <div className='div-items'>
                        <img src={linkedinImage} alt="" className='' />
                        <p><a className='' href={userData?.linkedin}>{userData?.name}</a></p>
                    </div>
                    <div className='div-items'>
                        <img src={phoneImage} alt="" className='' />
                        <p className=''> {userData?.Phone}</p>
                    </div>
                    <button onClick={updateInfo} className='custom-btn btn text-white btn-secondary mt-4'>Update Profile <img src="https://img.icons8.com/material-outlined/24/undefined/downloading-updates.png" alt='edit' /></button>
                </div>
            </div>
            {
                updatingInfo && <div>
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
                       {( userData?.photo || user?.photoURL) ? '' : <> <label className="label">
                            <span className="label-text text-secondary">Your photo </span>
                        </label>
                        <div className='input-main-div'>
                            <input
                                className=''
                                type="file"
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: "Photo is required"
                                    }
                                })}
                            />
                        </div>
                        <label className="label">
                            {errors.photo?.type === 'required' && <span className="label-text-alt text-error">{errors.photo.message}</span>}
                        </label>
                        </>
                        }
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
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
                        <input className='btn btn-secondary text-white mt-7 w-44 mx-auto inline-block' type="submit" value="Update Your Profile" /> 
                        <button onClick={()=> setUpdatingInfo(false)} className="btn btn-error text-white mt-7 w-44 mx-auto block mr-5">Cancel</button> 
                        </div>
                    </form>
                </div>
            }

        </div>
    );
};

export default MyProfile;