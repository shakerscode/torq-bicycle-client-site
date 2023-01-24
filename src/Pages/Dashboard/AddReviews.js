import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReviews = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        data.image = user?.photoURL;
            fetch('https://torq-server.onrender.com/reviews',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res =>
                res.json()
            ).then(data=> {
                console.log(data);
                if(data){
                    reset()
                    navigate('/reviews')
                    toast.success('Successfully added your review')
                }
            })
        
    }
    return (
        <div className='md:w-3/6 lg:3/6 w-5/6 mx-auto my-10'>
            <h2 className='text-center lg:text-3xl md:text-xl'>Add Your Review Please</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
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
                    <span className="label-text text-secondary">Your Position</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter your official position. Exm: CEO '
                    {...register("position", {
                        required: {
                            value: true,
                        }
                    })}
                />  
                <label className="label">
                    <span className="label-text text-secondary">Rating</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="number"
                    placeholder='Enter your rating out of 5'
                    {...register("rating", {
                        required: {
                            value: true,
                            message: "Rating is required"
                        },
                        max: {
                            value: 5,
                            message: "Review should be out of 5"
                        },
                        min: {
                            value: 1,
                            message: "Minimum 1 is required"
                        }
                    })}
                />
                <label className="label">
                    {errors.rating?.type === 'required' && <span className="label-text-alt text-error">{errors.rating.message}</span>}
                    {errors.rating?.type === 'max' && <span className="label-text-alt text-error">{errors.rating.message}</span>}
                    {errors.rating?.type === 'min' && <span className="label-text-alt text-error">{errors.rating.message}</span>}
                </label>

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
                            message: "Review is required"
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

export default AddReviews;