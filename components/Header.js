import Link from 'next/link';
import React from 'react';
import Category from './Category';
import Search from './Search';
import Login from './Login';
import Image from 'next/image';

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex flex-col md:flex-row items-center justify-around py-3 px-0 ">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <Link href={'/'} className="ml-0 md:ml-20">
        
            <Image
              src={'https://www.testvalley.kr/logo/logo-new.svg'}
              width={100}
              height={20}
              className='mt-1'
              alt='logo'
            />  
          
        </Link>
        <Category />
      </div>
      <Search />
      <Login />
    </header>
  );
}

export default Header;
