import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatesetNews = () => {
    return (
        <div className='flex items-center gap-3 '>
            <p className='bg-[#b72050] px-2 py-3 text-white'>Latest</p>
            <Marquee>
                <Link to={'/news'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga incidunt explicabo labore tempore vitae id autem, nostrum et in?
                </Link>
                <Link to={'/news'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga incidunt explicabo labore tempore vitae id autem, nostrum et in?
                </Link>
                <Link to={'/news'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga incidunt explicabo labore tempore vitae id autem, nostrum et in?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatesetNews;