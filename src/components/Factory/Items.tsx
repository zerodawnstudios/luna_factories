import React from 'react';
import Image from 'next/image';

const Items = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg shadow-black/40">
      <div className="relative h-[200px]">
        <Image src={'/background.jpg'} alt={''} fill objectFit="cover" />
      </div>
      <div className="bg-primary px-2">
        <h3 className="font-bold text-base">
          ZHEJIANG JINGHUI COSMETICS SHARE CO.,LTD
        </h3>
        <p className="text-sm">
          Main Products: OEM Perfume BodyLotion BodyMist
        </p>
      </div>
    </div>
  );
};

export default Items;
