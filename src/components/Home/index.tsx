import React from 'react';
import Search from './Search';
import Category from './Category';
import Wrapper from '../Wrapper';
import Item from './Items';

const items = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description for Item 1',
    price: 10.0,
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description for Item 2',
    price: 20.0,
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Description for Item 3',
    price: 30.0,
  },
  {
    id: 4,
    name: 'Item 4',
    description: 'Description for Item 4',
    price: 40.0,
  },
];
const Home = () => {
  return (
    <Wrapper>
      <div className="flex justify-center mb-8">
        <Search />
      </div>
      <div className="flex gap-8">
        <Category />
        <div className="grid-auto-fit w-full">
          {items.map((item, index) => (
            <Item key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
