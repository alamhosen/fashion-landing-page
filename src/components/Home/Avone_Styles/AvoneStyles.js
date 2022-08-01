import React from 'react';
import avone1 from '../../../images/Avone Styles/avone-1.png'
import avone2 from '../../../images/Avone Styles/avone-2.png'
import avone3 from '../../../images/Avone Styles/avone-3.png'

const AvoneStyles = () => {
    return (
        <div>
            <div className='text-center mb-14'>
                <h1 className='font-bold text-xl mb-4'>AVONE STYLES</h1>
                <p className='text-base'>Choose Your Favorite Color</p>
            </div>

            <div className='flex justify-center mt-4 mb-28'>
                <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:max-w-6xl gap-6 '>
                    <div className='lg:mt-20 pt-2'>
                        <img src={avone1} alt="" />
                    </div>
                    <div className='grid grid-roes-2 relative mb-6'>
                        <div>
                            <img src={avone2} alt="" />
                        </div>
                        <div className='flex gap-6 justify-end absolute bottom-0 right-0 h-72'>
                            <div className='flex items-end ml-3 mb-5 underline underline-offset-8 hover:font-bold'>
                                <a href="#">SHOW WOMEN’S DRESS</a>
                            </div>
                            <div>
                                <img src={avone3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AvoneStyles;