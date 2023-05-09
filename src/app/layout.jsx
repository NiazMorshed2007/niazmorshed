import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Niaz Morshed',
  description: 'Niaz is a frontend developer who has expertise in React, Next, JavaScript and TypeScript. An open source contributor and loves to build things.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img className="absolute top-0 left-0" style={{
        }} src="https://app.nhost.io/assets/line-grid.svg" alt="" />
        <div className="fixed z-40 flex flex-col items-center gap-7 bottom-12 text-lg text-primary/50 right-16">
          <BsTwitter />
          <BsLinkedin />
          <BsGithub />
          <div className="line w-[1px] h-[50px] bg-primary/50"></div>
        </div>
        <Header />
        {children}
      </body>
    </html>
  )
}
