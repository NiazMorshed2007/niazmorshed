import React from 'react'

const Cta = () => {
    return (
        <section className='py-20 flex items-center justify-center px-[5%]'>
            <div className='bg-primary/5 w-10/12 p-10 py-16 flex flex-col items-center gap-4 rounded-xl'>
                <h1 className='text-5xl font-semibold'>📩</h1>
                <h1 className='text-3xl font-semibold'>Have querys or want to have a chat?</h1>
                <p className='text-base w-7/12 text-center text-slate-400'>No matter if it's a simple question you want to ask or talk about job offers or "anything" I'm always there to have a chat!</p>
                <button className='p-3 px-6 text-sm mt-5 rounded-md border border-primary/50'>Message Now!</button>
            </div>
        </section>
    )
}

export default Cta