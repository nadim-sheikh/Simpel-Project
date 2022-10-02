import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12'>
            <a className='text-violet-700' href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;