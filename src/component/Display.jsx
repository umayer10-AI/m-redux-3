"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Display = () => {

    const [s,setS] = useState('')
    const data = useSelector(v => v.counter.users)
    const dispatch = useDispatch()
    console.log(data)

    const a = () => {
        dispatch
    }

    return (
        <div>
            <div className='m-5'>
                <h2 className='text-xl font-bold'>My task: </h2>
                <div className='flex items-center gap-2'>
                    <input onChange={(e) => setS(e.target.value)} type="text" placeholder='Input Text' className='border py-1 rounded-xl' />
                    <button onClick={a} className='py-1 px-3 rounded-2xl bg-green-600 text-white'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Display;