import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div >
            <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden lg:hidden">
                {open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
            </div>
            <div className={`md:flex lg:flex sm:text-center text-center justify-center bg-gray-200 py-4 w-full absolute duration-500 ease-in md:static ${open ? 'top-16' : 'top-[120px]'}`}>
                <CustomLink className='mr-8 p-[25px]' to='/home'>HOME</CustomLink>
                <CustomLink className='mr-8 p-[25px]' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='mr-8 p-[25px]' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='mr-8 p-[25px]' to='/blogs'>BLOGS</CustomLink>
                <CustomLink className='mr-8 p-[25px]' to='/about'>ABOUT</CustomLink>
            </div>

        </div >
    );
};

export default Navbar;