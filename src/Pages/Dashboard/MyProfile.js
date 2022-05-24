import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='md:w-3/6 lg:3/6 w-5/6 mx-auto my-10'>
            <h2 className='text-center lg:text-3xl md:text-xl'>Add Your Profile Information</h2>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text text-secondary">Name</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    value={user?.displayName}
                    {...register("name", {
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
                    placeholder='Enter your official position. Exm: CEO '
                    {...register("education", {
                        required: {
                            value: true,
                        }
                    })}
                />
                <label className="label">
                    <span className="label-text text-secondary">Image Url</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    value={user.photoURL}
                    {...register("image")}
                />
                <label className="label">
                    <span className="label-text text-secondary">LinkedIn</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter your rating out of 5'
                    {...register("linkedin")}
                />

                <label className="label">
                    <span className="label-text text-secondary">Your valuable review</span>
                </label>
                <textarea
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter your thought about our services'
                    {...register("userReview", {
                        required: {
                            value: true,
                            message: "Phone number is required"
                        }
                    })}
                />
                <label className="label">
                    {errors.userReview?.type === 'required' && <span className="label-text-alt text-error">{errors.userReview.message}</span>}
                </label>



                <input className='btn btn-secondary w-full text-white mb-7 block' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default MyProfile;