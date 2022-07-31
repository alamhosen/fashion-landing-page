import React, { useEffect, useState } from 'react';
import WomensProduct from './WomensProduct';

const WomensFashion = () => {
    const [womensFashion, setWomensFashion] = useState([])

    useEffect(() => {
        fetch('womensFashion.json')
            .then(res => res.json())
            .then(data => setWomensFashion(data))
    }, [])

    return (
        <div className='mb-28'>
            <div className='text-center'>
                <h1 className='font-bold text-xl mb-4'>WOMEN’S FASHION</h1>
                <p className='text-base'>Shop our new arrivals from established brands</p>
            </div>
            <div className='flex items-center justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                    {
                        womensFashion.map(product => <WomensProduct
                            key={product.id}
                            product={product}
                        ></WomensProduct>)
                    }

                </div>
            </div>
        </div>
    );
};

export default WomensFashion;