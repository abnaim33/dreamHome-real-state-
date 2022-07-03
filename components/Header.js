import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (

    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-2xl font-bold cursor-pointer'><span className='text-indigo-700'>D</span>ream<span className='text-indigo-700'>H</span>ome</h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Link href='/login' passHref>
            <button className='hover:text-violet-900 transition'>
              Log in

            </button>
          </Link>
          <Link

            href='/signup'
          >
            <button className='bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-3 rounded-lg transition'>
              Sign up

            </button>
          </Link>
        </div>
      </div>
    </header>

  );
};

export default Header;
