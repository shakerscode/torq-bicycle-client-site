import React from 'react';
import star from '../../images/icons/star.png';
import halfStar from '../../images/icons//half-star.png';
import blankStar from '../../images/icons/blank-star.png';

const Review = ({ review }) => {
    const { name, image, userReview, position, rating } = review;
    return (
        <div 
        data-aos="zoom-out-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        className="card bg-base-100 shadow-xl">
            <div className="avatar flex justify-between items-center p-6">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt='reviewer' />
                </div>
                <div className='pt-6'>
                    <h1 className='text-xl font-bold text-primary'>{name}</h1>
                    <small>{position}</small>
                </div>
            </div>
            <div className="px-7 items-center text-center">
                <p>{userReview}</p>
                <div className="p-7">
                    <div className="rating">
                        {
                            parseInt(rating) === 5 && <>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </>
                        }
                        {
                            parseInt(rating) === 4.5 && <>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={halfStar} alt="" />
                            </>
                        }
                        {
                            parseInt(rating) === 4 && <>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={blankStar} alt="" />                            
                                </>
                        }
                        {
                            parseInt(rating) === 3.5 && <>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={blankStar} alt="" />                            
                                <img src={blankStar} alt="" />                            
                                </>
                        }
                        {
                            parseInt(rating) === 3 && <>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={halfStar} alt="" />                            
                                <img src={blankStar} alt="" />                            
                                </>
                        }
                        {
                            parseInt(rating) === 2.5 && <>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                 <img src={halfStar} alt="" />                            
                                 <img src={blankStar} alt="" />                            
                                <img src={blankStar} alt="" />                            
                                </>
                        }
                        {
                            parseInt(rating) === 2 && <>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                 <img src={blankStar} alt="" />                            
                                 <img src={blankStar} alt="" />                            
                                <img src={blankStar} alt="" />                            
                                </>
                        }
                        {
                            parseInt(rating) === 1 && <>
                                <img src={star} alt="" />
                                 <img src={blankStar} alt="" />                            
                                 <img src={blankStar} alt="" />                            
                                 <img src={blankStar} alt="" />                            
                                <img src={blankStar} alt="" />                            
                                </>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;