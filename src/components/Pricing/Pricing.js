import React from 'react';
import PricingOptions from './PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'Free', price: 0, benefits:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature'
        ]
    },
        {id:2, name:'Medium', price: 9.99, benefits:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature'
        ]},
        {id:3, name:'Premium', price: 19.99, benefits:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature'
        ]}
    ];
    return (
        <div>
            <h2 className='text-5xl font-bold text-violet-700 mt-5'>
            Best Deal of the Town</h2>
            <div className='m-8 grid md:grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PricingOptions
                key={option.id}
                option={option}
                ></PricingOptions>)
            }
            </div>
        </div>
    );
};

export default Pricing;