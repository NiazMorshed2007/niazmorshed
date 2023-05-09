import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img className="absolute top-0 left-0" style={{
        }} src="https://app.nhost.io/assets/line-grid.svg" alt="" />
        <Header />
        {children}
      </body>
    </html>
  )
}
