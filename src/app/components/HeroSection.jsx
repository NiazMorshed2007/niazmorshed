import Link from 'next/link'
import React from 'react'
import { BsArrowDown, BsGithub } from 'react-icons/bs'

const HeroSection = () => {
    return (
        <section className="hero-section relative w-screen flex flex-col h-screen items-center justify-center gap-2">
            <div style={{
                animationDuration: "5s"
            }} className="absolute w-[700px] h-[800px] animate-spin rounded-full -top-1/2 left-60 bg-slate-900/60 -z-30 blur-3xl"></div>
            <h1 className=" tracking-wide text-[13px] font-light">Hi there! 👋 I'm,</h1>
            <h1 className="text-6xl font-semibold mb-5">Niaz Morshed</h1>
            <p className="w-1/2 text-center mb-7 font-light text-slate-400 text-lg">Frontend Developer |
                Working with React, Next, JavaScript and TypeScript  💻 |
                Obessed in building👷‍♂️| Open source contributor  ⚡</p>
            <div className="flex items-center gap-4">
                <Link href={"https://github.com/NiazMorshed2007"} target='_blank'>
                    <button className="p-2 px-6 rounded-full border flex items-center gap-3 border-primary/50 bg-primary/10 transition-all hover:backdrop-blur-sm"><BsGithub /> View Github Profile</button>
                </Link>
                <button className="p-2 px-6 rounded-full border flex items-center gap-3 border-primary/10 bg-primary/5 transition-all hover:backdrop-blur-sm"><div className='w-[10px] h-[10px] bg-green-600 rounded-full'></div> I'm open for job!</button>
            </div>

            <div className="absolute flex flex-col items-center -translate-x-1/2 gap-3 bottom-10 left-1/2">
                <BsArrowDown className="text-md animate-bounce" />
                <p className="text-xs animate-pulse">Scroll Down</p>
            </div>
        </section>
    )
}

export default HeroSection