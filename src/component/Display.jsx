"use client"
import React from 'react';

const Display = () => {
    return (
        <div>
            <div className='m-5'>
                <h2 className='text-xl font-bold'>My task: </h2>
                <div className='flex items-center gap-2'>
                    <input type="text" placeholder='Input Text' className='border py-1 rounded-xl' />
                    <button className='py-1 px-3 rounded-2xl bg-green-600 text-white'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Display;