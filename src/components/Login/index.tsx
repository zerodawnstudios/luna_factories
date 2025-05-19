import React from 'react';
import Form from './Form';
import Image from 'next/image';
import Background from '@/public/background.jpg';
import MemberShip from './MemberShip';
import ThankYou from './ThankYou';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <Image
        alt="background"
        src={Background}
        fill
        className="-z-10 object-cover"
      />

      <div className="flex items-center">
        <Form />
        <div className="flex flex-col gap-4 ml-4">
          <MemberShip />
          <ThankYou />
        </div>
      </div>
    </div>
  );
};

export default Login;
