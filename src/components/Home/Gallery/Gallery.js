import React from 'react';
import gallery1 from '../../../images/gallery/gallery1.png'
import gallery2 from '../../../images/gallery/gallery2.png'
import gallery3 from '../../../images/gallery/gallery3.png'
import gallery4 from '../../../images/gallery/gallery4.png'

const Gallery = () => {
    console.log(gallery1);
    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-2 lg:max-w-6xl place-items-center gap-6'>
                <div className='grid grid-roes-2'>
                    <div><img src={gallery1} alt="" srcset="" /></div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div><img src={gallery2} alt="" srcset="" /></div>
                        <div className='ml-3'><img src={gallery3} alt="" srcset="" /></div>
                    </div>
                </div>
                <div>
                    <img src={gallery4} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Gallery;