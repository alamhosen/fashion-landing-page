import React, { useEffect, useState } from 'react';
import MensProduct from './MensProduct';

const MensFashion = () => {
    const [mensFashion, setmensFashion] = useState([])

    useEffect( () => {
        fetch('mensFashion.json')
        .then(res => res.json())
        .then(data => setmensFashion(data))
    }, [])

    return (
        <div className='mb-28'>
            <div className='text-center'>
                <h1 className='font-bold text-xl mb-4'>MEN’S FASHION</h1>
                <p className='text-base'>Shop our new arrivals from established brands</p>
            </div>
            <div className='flex items-center justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                    {
                        mensFashion.map(product => <MensProduct
                            key={product._id}
                            product={product}
                        ></MensProduct>)
                    }

                </div>
            </div>
        </div>
    );
};

export default MensFashion;