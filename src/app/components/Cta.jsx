"use client"

import React from 'react'

const Cta = () => {
    const handleOpenEmail = () => {
        const email = 'niazmorshed2007@gmail.com'; // replace with your email address
        window.location.href = `mailto:${email}`;
    };
    return (
        <section className='py-20 flex md:items-center md:justify-center px-[5%]'>
            <div className='bg-primary/5 w-full md:w-10/12 p-10 py-16 flex flex-col items-center gap-4 rounded-3xl'>
                <h1 className='text-5xl font-semibold'>📩</h1>
                <h1 className='text-3xl text-center font-semibold'>Have querys or want to have a chat?</h1>
                <p className='text-base w-full md:w-7/12 text-center text-slate-400'>No matter if it's a simple question you want to ask or talk about job offers or "anything" I'm always there to have a chat!</p>
                <button onClick={handleOpenEmail} className='p-2 md:px-6 md:text-sm text-xs px-3 mt-5 rounded-md border border-primary/50'>Message Now!</button>
            </div>
        </section>
    )
}

export default Cta