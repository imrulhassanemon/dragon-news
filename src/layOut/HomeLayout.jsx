import React from 'react';
import Header from '../Component/Header';
import LatesetNews from '../Component/LatesetNews';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>

            <section className='w-11/12 mx-auto'>
                <LatesetNews></LatesetNews>
            </section>
        </div>
    );
};

export default HomeLayout;