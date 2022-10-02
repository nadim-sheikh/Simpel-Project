import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({benefit}) => {
    return (
        <div className='mt-5 pl-5 flex items-center'>
                <CheckCircleIcon className="h-4 w-4 text-violet-700"/>
                <p className='ml-1 font-medium'>{benefit}</p>
            </div>
    );
};

export default Feature;