import React from 'react';
import featuredBG from '../../images/featuredBanner.png'

const Featured = () => {
    return (
        <div>
            <div class="max-h-fit flex items-end justify-start " style={{
                backgroundImage: `url("${featuredBG}")`, height:"745px"
            }}>
                
                <div class="text-black lg:ml-56 xl:mb-28 xl:ml-56 lg:mb-24 sm:mb-10 sm:ml-10 md:mb-10 md:ml-10 mb-4 font-bold">
                    <div class="">
                        <h2 className='text-lg mb-2'>OWN THE DAY</h2>
                        <h1 class="mb-5 text-7xl font-bold ">TACHEN 19</h1>
                        <div className=''>
                        <button class="btn btn-sm btn-active px-8 mr-3 text-lg rounded-none bg-black">SHOP COLLECTION</button>
   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;