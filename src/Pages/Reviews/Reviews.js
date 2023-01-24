import React  from 'react';
import { useQuery } from 'react-query';
import Review from '../HomePage/Review';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const Reviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () =>
    fetch('https://torq-server.onrender.com/review').then(res =>
      res.json()
    )
  )

  if(isLoading){
      return <LoadingSpinner></LoadingSpinner>
  }
    return (
           <div className='my-12'>
             <h1 className='text-center font-bold md:text-4xl text-2xl text-secondary py-10 uppercase'>Lets know what our clients say</h1>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-4/6 mx-auto'>
             {
                 reviews.map((review, index)=> <Review
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