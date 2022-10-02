import React from 'react';
import Feature from './Feature/Feature';

const PricingOptions = ({option}) => {
    const {benefits} = option; 
    return (
        <div className='bg-violet-100 pt-10 rounded-md'>
            <div>
                <h1 className='text-3xl text-gray-700 font-bold'><span>{option.price}</span>
                <span className='text-2xl text-gray-500'>/mon</span>
                </h1>
                <p className='text-violet-700 font-bold text-2xl'>{option.name}</p>
            </div>
            {
                benefits.map(benefit => <Feature benefit={benefit}></Feature>)
            }
            <button className='bg-violet-700 w-full text-2xl rounded-bl-md rounded-br-md text-white p-2 font-bold mt-2.5'>Buy Now</button>
        </div>
    );
};

export default PricingOptions;