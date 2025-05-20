import React from 'react';
import Image from 'next/image';
import ItemImage from '@/public/background.jpg';

const Item = () => {
  return (
    <div className="rounded-2xl h-fit overflow-hidden shadow-lg shadow-black/30">
      <div className="relative h-[200px] min-w-[250px] bg-red-100">
        <Image src={ItemImage} alt={'Image'} fill objectFit="cover" />
      </div>
      <div className="bg-primary px-4 py-2 gap-4 flex justify-between items-center">
        <div>
          <p className="text-white">Title</p>
          <div className="text-sm">
            <p>Summary: xxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxx</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white size-8 mb-1 rounded-full" />
          <p className="text-white text-xs">ID: xxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
