import React from 'react';
import Banner from '../Shared/Banner';
import Featured from '../Shared/Featured';
import AvoneStyles from './Avone_Styles/AvoneStyles';
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
            <AvoneStyles></AvoneStyles>
            <Featured></Featured>

        </div>
    );
};

export default Home;