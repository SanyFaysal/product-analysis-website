import React from 'react';

const Blogs = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className='my-8'>
                <h1 className='text-4xl  mb-2 text-red-500'>What is Context API ? </h1>
                <p className='text-2xl  '>To pass a data by props from grand parents component to children component, it needs to sent grand parents to father then father to children called prop drilling.It is very difficult.Here the Context API works well. It pass a data through a global variable that can be used in every component.So to pass a data from any component to any component , Context API is a way to pass data avoiding props drilling. </p>
            </div>
            <div className='my-8'>
                <h1 className='text-4xl mb-2 text-red-500'>What is Semantic Tag ?</h1>
                <p className='text-2xl  '>Semantic Tag is an element that have a meaningful or understandable for both human and machine. It is an wonder feature of HTML5 . some Semantic tag are header, footer, article , main, nav and so more .</p>
            </div>
            <div className='my-8'>
                <h1 className='text-4xl  mb-2 text-red-500'>What are the different between inline and inline block element ?</h1>
                <p className='text-2xl  '>Inline elements allow left or right margin and padding but not top or bottom. But inline-block elements allow left , right, top and bottom margin or padding .Inline elements do not allow any height or width but inline block element allow height or width .  </p>
            </div>
        </div>
    );
};

export default Blogs;