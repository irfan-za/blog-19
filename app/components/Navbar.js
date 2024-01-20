'use client'
import Image from 'next/image'
import Link from 'next/link'
import ScrollDetector from '../utils/scrollDetector'
import DarkModeToggle from './DarkModeToggle'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navlinks = [
  { name: 'Posts', href: '/' },
  { name: 'Users', href: '/users' },
]

export default function Navbar() {
  const scroll= ScrollDetector()
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

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
        <div className='flex items-center space-x-3'>
          {navlinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                activePath === item.href ? 'bg-sky-500 text-white bg-opacity-100' : 'bg-opacity-0 text-sky-600 hover:bg-sky-500 hover:text-white  transition duration-300 ease-in-out',
                'py-1 px-3 text-base font-medium  rounded-full'
              )}
              aria-current={activePath === item.href ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
  )
}
