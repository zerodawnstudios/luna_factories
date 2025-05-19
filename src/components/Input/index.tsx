import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
}

const Input = ({
  type = 'text',
  placeHolder,
  className = '',
  ...props
}: InputProps) => {
  return (
    <input
      className={`bg-primary px-4 py-2 rounded-md w-full ` + className}
      type={type}
      placeholder={placeHolder}
      {...props}
    />
  );
};

export default Input;
