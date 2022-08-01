import React from 'react';
import featuredBG from '../../images/featuredBanner.png'

const Featured = () => {
    return (
        <div>
            <div className="max-h-fit flex justify-center items-center lg:items-end lg:justify-start sm:items-center sm:justify-center" style={{
                backgroundImage: `url("${featuredBG}")`, height:"745px"
            }}>
                
                <div className="text-black lg:ml-36  lg:mb-24  xl:mb-28 xl:ml-36 sm:mb-10 sm:ml-10 md:mb-10 md:ml-10 mb-4 font-bold">
                    <div className="">
                        <h2 className='text-lg mb-2'>OWN THE DAY</h2>
                        <h1 className="mb-5 text-7xl font-bold ">TACHEN 19</h1>
                        <div className=''>
                        <button className="btn btn-sm btn-active px-8 mr-3 text-lg rounded-none bg-black">SHOP COLLECTION</button>
   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;