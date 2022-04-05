import React from 'react';
import { useNavigate } from 'react-router-dom';
import loadReviews from '../hooks/loadReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, someReviews] = loadReviews()
    const navigate = useNavigate()
    const allReviews = () => {
        const path = '/reviews'
        navigate(path)
    }
    return (
        <div className='lg:container-[4em] md:container mx-auto '>
            <div className='flex grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center border-x-gray-100 mx-auto mt-4'>
                <div className=''>
                    <h3 className='text-5xl font-bold font-sans'>
                        Do A Perfect Launch With Your
                        <span className='text-indigo-500 ml-2'>Friends</span>
                    </h3>
                    <p className='text-2xl mt-4'>It is a long day ahead and you and your friends are hungry.You want it to be delicious, but you do not want to spend too much. A biriyani would just be the perfect meal and the just even the thought of it makes your mouth water! You do not need to search for options anymore. <span className='text-red-500'>Biriyani lover</span> House is just the perfect option for you!</p>

                </div>
                <div className=''>
                    <img src="https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?t=st=1649044887~exp=1649045487~hmac=c5ffbbfff9d2086bd81ad4ba09475545039d8d28613ad65d4d019130adcc8e5e&w=740" className=' rounded' alt="" />
                </div>
            </div>
            {/* customers review  */}
            <div className='font-[500] my-8'>
                <h1 className='text-4xl text-center text-indigo-500 my-[50px]'>Customer Reviews ({someReviews.length})</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-8'>
                    {
                        someReviews.map(review => <Review
                            key={review.id}
                            reviewDetail={review}
                        ></Review>)
                    }
                </div>
                <div className='flex justify-center my-[40px]'>
                    <button onClick={allReviews} className='text-xl border-indigo-400 border-2 rounded-lg py-2 font-[500] px-8 mx-auto hover:bg-indigo-400'>All Review</button>

                </div>
            </div>
        </div>
    );
};

export default Home;