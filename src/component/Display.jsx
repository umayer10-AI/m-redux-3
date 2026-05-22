"use client"
import { addUser, removeUser } from '@/redux/slice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Display = () => {

    const [s,setS] = useState('')
    const data = useSelector(v => v.counter.users)
    const dispatch = useDispatch()
    console.log(data)

    const a = () => {
        dispatch(addUser(s))
    }

    return (
        <div className='m-5'>
            <div className='mb-10'>
                <h2 className='text-xl font-bold'>My task: </h2>
                <div className='flex items-center gap-2'>
                    <input onChange={(e) => setS(e.target.value)} type="text" placeholder='Input Text' className='border py-1 rounded-xl' />
                    <button onClick={a} className='py-1 px-3 rounded-2xl bg-green-600 text-white'>Add</button>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    data?.map(v => (
                        <h2 key={v.id}>{v.name} <button onClick={() => dispatch(removeUser(v.id))} className='py-0 px-3 rounded-2xl bg-pink-600 text-white'>Delete</button></h2>
                    ))
                }
            </div>
        </div>
    );
};

export default Display;