import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center mt-2'>
                {/* <img src={logo} alt="" /> */}
                <img className='lg:w-[300px] ' src={logo} alt="" />
                <h1 className='text-gray-500'>Journalism with                                                          out Fear or Favor</h1>
                <p>{moment().format('dddd MMMM Do YYYY')}</p>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;