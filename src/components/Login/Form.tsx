import React from 'react';
import Input from '../Input';
import Button from '../Button';

const Form = () => {
  return (
    <div className="flex flex-col items-center bg-white/70 px-10 py-16 rounded-2xl shadow-lg w-96 my-auto">
      <p className="font-extrabold text-3xl mb-8">LOG IN</p>
      <p className="font-bold w-full">E-MAIL</p>
      <Input placeHolder="Email" className="mb-8" />
      <p className="font-bold w-full">PASSWORD</p>
      <Input placeHolder="Password" type="password" className="mb-14" />
      <Button text="Log In" />
    </div>
  );
};

export default Form;
