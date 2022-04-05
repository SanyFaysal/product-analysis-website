import React from 'react';
import loadReviews from '../hooks/loadReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = loadReviews()
    return (
        <div className='lg:container md:container  mx-auto  mb-[40px]'>
            <h1 className='text-4xl my-8 text-center text-indigo-500 font-[500]'>Total Customers Reviews: {reviews.length}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 grid-col-1 gap-8 mx-auto'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        reviewDetail={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;