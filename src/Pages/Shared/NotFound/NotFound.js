import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Machanic is sleeping</h2>
            <img className='w-100' src={sleeping} alt=''></img>
        </div>
    );
};

export default NotFound;