import Link from 'next/link'
import React from 'react'
import Category from './Category'
import Search from './Search'
import Login from './Login'
import Image from 'next/image'

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-around p-5 px-5 ">
      
      <div className='flex space-x-2'>
        <Link href={'/'} className="ml-20">
          <Image src={'https://www.testvalley.kr/logo/logo-new.svg' }
           width={100}
           height={20}
           className='mt-1'
           alt='logo'/>
           </Link>
        <Category/>
      </div>
      <Search/>
      <Login/>
    </header>
  )
}

export default Header