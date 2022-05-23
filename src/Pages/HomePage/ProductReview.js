import React, { useEffect, useState } from 'react';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import Review from '../SharedPages/Review';

const ProductReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
         <div>
             <h1 className='text-center font-bold md:text-4xl text-2xl text-secondary py-10 uppercase'>Lets know what our clients say</h1>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-4/6 mx-auto'>
             {
                 reviews.slice(0, 3).map((review, index)=> <Review
                 review={review}
                 key={index}
                 >
                 </Review>)
             }
         </div> 
        <div className='flex justify-center my-10'>
        <PrimaryBtn>Read More Reviews</PrimaryBtn>
        </div>
     
         </div>
    );
};

export default ProductReview;