import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../SharedPages/PrimaryBtn';
import Review from './Review';

const ProductReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://safe-waters-55642.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
         <div>
             <h1 
             
         data-aos="flip-left"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="1300"
         data-aos-easing="ease-in-out"
             className='text-center font-bold md:text-4xl text-lg text-secondary py-10 uppercase'>Lets know what our clients say</h1>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-4/6 mx-auto'>
             {
                 reviews.map((review, index)=> <Review
                 review={review}
                 key={index}
                 >
                 </Review>)
             }
         </div> 
        <div className='flex justify-center my-10'>
        <PrimaryBtn><Link to='/reviews'>Read More Reviews</Link></PrimaryBtn>
        </div>
     
         </div>
    );
};

export default ProductReview;