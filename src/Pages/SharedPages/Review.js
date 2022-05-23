import React from 'react';
import star from '../../images/icons/star.png';
import halfStar from '../../images/icons//half-star.png';
import blankStar from '../../images/icons/blank-star.png';

const Review = ({ review }) => {
    const { name, image, userReview, position, rating } = review;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="avatar flex justify-between items-center p-10">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt='reviewer'/>
                </div>
                <div className='pt-5'>
                    <h1 className='text-xl font-bold text-primary'>{name}</h1>
                    <small>{position}</small>
                </div>
            </div>
            <div class="px-7 items-center text-center">
                <p>{userReview}</p>
                <div class="p-7">
                    <div class="rating">
                         <img src={star} alt="" />
                         <img src={star} alt="" />
                         <img src={star} alt="" />
                         <img src={star} alt="" />
                         {
                             rating === 5 && <img src={star} alt="" />
                         }
                         {
                             rating === 4 && <img src={blankStar} alt="" />
                         }
                         {
                             rating === 4.5 && <img src={halfStar} alt="" />
                         }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;