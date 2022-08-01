import React from 'react';

const MensProduct = ({ product }) => {
    const { name, img, title, retailPrice, sellPrice } = product;
    return (
        <div>
            <div className="lg:max-w-lg mt-16">
                <figure><img className='mb-9' src={img} alt="" /></figure>
                <div className="">
                    <h2>{name}</h2>
                    <h2 className="text-1xl font-bold py-1">{title}</h2>
                    <div className='flex'>
                        <p className='mr-8 folt-bold line-through'>${retailPrice}</p>
                        <p className='text-red-400 font-bold'>${sellPrice}</p>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default MensProduct;