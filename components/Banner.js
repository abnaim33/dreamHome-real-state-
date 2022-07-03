import React from 'react';

import BannerImage from '../assets/img/house-banner.png';
import Search from '../components/Search';
import Image from 'next/image'
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-indigo-700'>Rent</span> Your House with High Price<span className='text-indigo-700'>.</span>
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eius
            quasi sunt sequi reprehenderit ipsam praesentium commodi, quas mollitia
            debitis
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <Image src={BannerImage} alt='banner' width={650} height={550} />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
