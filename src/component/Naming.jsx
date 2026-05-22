"use client"
import { setName } from '@/redux/slice2';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Naming = () => {

    const n = useSelector(v => v.nameSet.ss)
    console.log(n)
    const d = useDispatch()

    return (
        <div className='m-5'>
            <h2 className='text-green-600 text-2xl font-bold'>Name: {n}</h2>
            <button onClick={() => d(setName('hello'))} className='py-1 px-3 rounded-2xl bg-green-600 text-white'>Click</button>
        </div>
    );
};

export default Naming;