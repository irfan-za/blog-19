'use client'
import Image from 'next/image'
import Link from 'next/link'
import ScrollDetector from '../utils/scrollDetector'
import DarkModeToggle from './DarkModeToggle'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const scroll= ScrollDetector()

  return (
    <nav className={classNames(
      "fixed bg-brand z-50 top-0 left-0 right-0 shadow-lg bg-white transition duration-300 ease-in", 
      `${scroll.scrollingDown? "-translate-y-20" :"translate-y-0"}`
      )}>
      <div className="flex mx-auto max-w-3xl px-2 h-20 items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <Link href={'/'}>
            <Image
              src='/asset/logo.png'
              width={120}
              height={100}
              alt="Synapsis logo"
              className='w-auto'
            /></Link>
        </div>
        <h1 className='hidden sm:block text-3xl font-bold text-gray-700'>Blog</h1>
        <div className='flex items-center space-x-3'>
          <Link
            href='/users'
            className='bg-sky-500 hover:bg-sky-600 text-white bg-opacity-100 px-3 text-base font-medium rounded-full pb-1'
            aria-current='page'
          >
            users
          </Link>
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
  )
}
