import React from 'react';
import Input from '../Input';
import Button from '../Button';

const Form = () => {
  return (
    <div className="flex items-center gap-8 bg-white/90 px-10 py-16 rounded-2xl shadow-lg w-fit my-auto">
      <div className="flex flex-col items-center min-w-80">
        <p className="font-extrabold text-3xl mb-8">LOG IN</p>
        <p className="font-bold w-full">Name</p>
        <Input placeHolder="Name" className="mb-4" />

        <p className="font-bold w-full">E-MAIL</p>
        <Input placeHolder="Email" className="mb-4" />

        <p className="font-bold w-full">PHONE NUMBER</p>
        <Input placeHolder="PHONE NUMBER" type="tel" className="mb-4" />

        <p className="font-bold w-full">COUNTRY</p>
        <Input placeHolder="" className="mb-4" />

        <p className="font-bold w-full">PASSWORD</p>
        <Input placeHolder="Password" type="password" className="mb-14" />

        <Button text="START" />
      </div>
      <div>
        <div className="bg-primary rounded-2xl p-22 mb-8 shadow-lg shadow-black/50">
          <p className="text-3xl">Something</p>
        </div>
        <h2 className="font-extrabold text-6xl">Thank you</h2>
        <h4 className="text-primary font-extrabold text-2xl">
          Welcome to join us
        </h4>
      </div>
    </div>
  );
};

export default Form;
