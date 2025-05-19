import React from 'react';
import Image from 'next/image';
import Background from '@/public/background.jpg';
import Form from './Form';

const SignUp = () => {
  return (
    <div className="flex justify-center h-[calc(100vh-64px)]">
      <Image
        alt="background"
        src={Background}
        fill
        className="-z-10 object-cover"
      />
      <Form />
    </div>
  );
};

export default SignUp;
