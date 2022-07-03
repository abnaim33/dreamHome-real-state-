import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
const House = ({ house }) => {
  return (
    <Link href={`/property/${house.id}`}>
      <div className='bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px]
     mx-auto cursor-pointer hover:shadow-2xl transition'>
        <Image className='mb-8' width={310} height={200} src={house.image} alt='house' />
        <div className='mb-4 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3 py-1  inline-block'>
            {house.type}
          </div>
          <div className='bg-indigo-500 rounded-full text-white px-3 py-1 inline-block'>
            {house.country}
          </div>
        </div>
        <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
        <div className='flex gap-x-4 my-4'>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiBed />
            </div>
            <div className='text-base'>{house.bedrooms}</div>
          </div>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiBath />
            </div>
            <div className='text-base'>{house.bathrooms}</div>
          </div>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiArea />
            </div>
            <div className='text-base'>{house.surface}</div>
          </div>
        </div>
        <div className='text-lg font-semibold text-indigo-600 mb-4'>
          $ {house.price}
        </div>
      </div>
    </Link>
  );
};

export default House;
