import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import logo from 'app/assets/svg/logo.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danishjeet Singh',
  description: 'Full Stack Web Developer and Data Scientist looking for a Internship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='{inter.className} max-w-6xl mx-auto py-10'>
        <header className=''>
          <div className=''>
            <Link href="/"
            className=''>
              <Image
              src="/assets/svg/logo.svg"
              height={80}
              width={80}
              className=''
              alt='logo'
              />
            </Link>

          </div>
          
        </header>
        
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
