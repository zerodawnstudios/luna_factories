import React from 'react';
import Wrapper from '../Wrapper';
import Image from 'next/image';
import Logo from '@/public/logo.png';

const Header = () => {
  return (
    <Wrapper className="flex justify-between">
      <div className="flex items-center">
        <div className="mr-4">
          <Image alt="Logo" src={Logo} width={100} height={50} />
        </div>
        <div>
          <ul className="flex">
            <li className="flex items-center bg-black text-white w-20 h-16 justify-center">
              Home
            </li>
            <li className="flex justify-center items-center w-20">
              <p className="border-l-[1px] w-full text-center">Factory</p>
            </li>
            <li className="flex justify-center items-center w-20">
              <p className="border-x-[1px] w-full text-center">Idea</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p>Login</p>
        <div className="bg-black rounded-full w-12 h-12"></div>
      </div>
    </Wrapper>
  );
};

export default Header;
