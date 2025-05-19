import React from 'react';

const Button = ({ text }: { text: string }) => {
  return <button className="bg-primary w-24 py-2 rounded-md">{text}</button>;
};

export default Button;
