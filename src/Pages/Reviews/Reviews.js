import React, { useEffect, useState } from 'react';
import Review from '../HomePage/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://safe-waters-55642.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
           <div className='my-12'>
             <h1 className='text-center font-bold md:text-4xl text-2xl text-secondary py-10 uppercase'>Lets know what our clients say</h1>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-4/6 mx-auto'>
             {
                 reviews.slice(0, 6).map((review, index)=> <Review
                 review={review}
                 key={index}
                 >
                 </Review>)
             }
         </div> 
        </div>
    );
};

export default Reviews;