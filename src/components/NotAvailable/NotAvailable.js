import React from 'react';

const NotAvailable = () => {
    return (
        <div>
            <div className='w-[450px] h-[450px] mx-auto'>
                <img src="https://img.freepik.com/free-vector/character-illustration-sponge-with-404-error-character-design_309278-2219.jpg?w=740" alt="" />
            </div>
            <div className='mt-[-75px] text-center '>
                <h1 className='text-4xl font-bold'>404</h1>
                <h1 className='text-2xl font-[500]'>This site is not Available right now</h1>
                <p className='text-xl'>Try again</p>
            </div>
        </div>
    );
};

export default NotAvailable;