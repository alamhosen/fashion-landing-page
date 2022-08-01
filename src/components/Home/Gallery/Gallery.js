import React from 'react';
import gallery1 from '../../../images/gallery/gallery1.png'
import gallery2 from '../../../images/gallery/gallery2.png'
import gallery3 from '../../../images/gallery/gallery3.png'
import gallery4 from '../../../images/gallery/gallery4.png'

const Gallery = () => {
    console.log(gallery1);
    return (
        <div className='flex justify-center mt-2 mb-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:max-w-6xl place-items-center gap-6'>
                <div className='grid grid-roes-2'>
                    <div><img src={gallery1} alt="" srcset="" /></div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div><img src={gallery2} alt="" srcset="" /></div>
                        <div className='ml-3'><img src={gallery3} alt="" srcset="" /></div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={gallery4} alt="" />
                    <button className='absolute bottom-0 left-0 text-black btn btn-sm mb-6 ml-6 px-8 rounded-none bg-white text-lg'>CATAGORY NAME</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;