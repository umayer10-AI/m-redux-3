"use client"
import { increment } from '@/redux/slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const cnt = useSelector(v => v.counter.value)
    console.log(cnt)

    const dispatch = useDispatch()

    return (
        <div>
            <h2 className='text-2xl font-bold'>Umayer Ahmad</h2>
            <div className='m-5 space-y-2'>
                <h2>Count: {cnt}</h2>
                <button onClick={() => dispatch(increment())} className='py-1 px-3 rounded-2xl bg-blue-900 text-white'>Click</button>
            </div>
        </div>
    );
};

export default Counter;