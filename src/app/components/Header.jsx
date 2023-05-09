"use client"

import { Cinzel_Decorative } from "next/font/google"
import Link from "next/link";

const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: ['400', '700', '900'] })

const Header = () => {

    const handleOpenEmail = () => {
        const email = 'niazmorshed2007@gmail.com'; // replace with your email address
        window.location.href = `mailto:${email}`;
    };

    return <header className="fixed backdrop-blur-md z-50 flex items-center justify-between top-0 w-full left-0 px-[5%] py-7">
        <h1 className={`${cinzel.className} text-base md:text-xl font-medium`}>Niaz Morshed.</h1>
        <nav className="hidden md:flex items-center text-sm gap-6">
            <Link href={"#experience"}>Experience</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"#recommendations"}>Recommendations</Link>
            {/* <p>Open Source Activity</p> */}
        </nav>
        <div className="flex items-center gap-7 text-sm">
            <button onClick={handleOpenEmail} className="p-2 px-4 md:px-6 text-xs md:text-base rounded-md border border-primary/40 border-md">Drop a message!</button>
            {/* <button>Contact</button> */}
        </div>
    </header>
}

export default Header