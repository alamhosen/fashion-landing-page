import React from 'react';
import bannerBG from '../../images/banner-bg.png'

const Banner = () => {
    return (
        <div>
            <div className="max-h-fit mb-28 flex items-center justify-center lg:items-end lg:justify-end md:items-end md:justify-end sm:items-end sm:justify-end xl:items-end xl:justify-end px-4" style={{
                backgroundImage: `url("${bannerBG}")`, height:"745px"
            }}>
                
                <div className="text-black lg:mr-36 xl:mb-24 xl:mr-24 lg:mb-24 sm:mb-10 sm:mr-10 md:mb-10 md:mr-10 mb-4 font-bold">
                    <div className="">
                        <h2 className='text-lg mb-2'>NEW TREND</h2>
                        <h1 className="mb-5 text-7xl font-bold ">COLLUSION</h1>
                        <p className="mb-5 text-lg">An exclusive selection of this season's trends.</p>
                        <div className='flex'>
                        <button className="btn btn-sm btn-active px-8 mr-3 text-lg rounded-none bg-black">DISCOVER</button>
                        <button className="btn btn-sm text-lg btn-active px-8 rounded-none bg-black ">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;