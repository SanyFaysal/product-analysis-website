import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Review = ({ reviewDetail }) => {
    const { name, review, rating, image } = reviewDetail;
    return (
        <div className='border rounded-lg bg-indigo-50 shadow-lg p-6 '>
            <div className='flex items-center'>
                <div >
                    <img src={image} className='w-[65px] h-[65px] rounded-full' alt="" />
                </div>
                <div className='ml-5'>
                    <p className='text-2xl font-bold '>{name}</p>
                    <p className='text-1xl font-bold'>Rating: {rating}
                        <FontAwesomeIcon className='text-orange-400 ml-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-orange-400 ml-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-orange-400 ml-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-orange-400 ml-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-orange-400 ml-1' icon={faStar}></FontAwesomeIcon>

                    </p>
                </div>
            </div>
            <div className='text-center mt-3'>
                <p className='text-1xl'>{review}</p>
            </div>

        </div>
    );
};

export default Review;