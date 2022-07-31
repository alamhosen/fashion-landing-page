import React from 'react';
import Banner from '../Shared/Banner';
import Gallery from './Gallery/Gallery';
import MensFashion from './Mens_Fashion/MensFashion';
import WomensFashion from './Womens_Fashion/WomensFashion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <WomensFashion></WomensFashion>
            <MensFashion></MensFashion>

        </div>
    );
};

export default Home;