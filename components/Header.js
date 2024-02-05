import Link from 'next/link';
import React from 'react';
import Category from './Category';
import Search from './Search';
import Login from './Login';
import Image from 'next/image';

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex justify-start sm:justify-around p-5 px-0">
      <div className="flex">
        <Link href={'/'} className="ml-0">
          <Image
            src={'https://www.testvalley.kr/logo/logo-new.svg'}
            width={100}
            height={40}
            className='mt-1'
            alt='logo'
          />
        </Link>
        <Category />
      </div>
      {/* Display Search component only on screens larger than or equal to md (tailwindcss) */}
      <div className="hidden md:block">
        <Search />
      </div>
      <Login className="hidden md:block" />
    </header>
  );
}

export default Header;
