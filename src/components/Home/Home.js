import React from 'react';
import Banner from '../Shared/Banner';
import Gallery from './Gallery/Gallery';
import WomensFashion from './Womens_Fashion/WomensFashion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <WomensFashion></WomensFashion>

        </div>
    );
};

export default Home;