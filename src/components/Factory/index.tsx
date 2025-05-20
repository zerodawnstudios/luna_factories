import React from 'react';
import Search from '../Home/Search';
import Wrapper from '../Wrapper';
import Filters from './Filters';
import Items from './Items';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Factory = () => {
  return (
    <Wrapper>
      <div className="my-8">
        <Search />
      </div>
      <Filters className="mb-8" />
      <div className="grid-auto-fit gap-8 pb-8">
        {items.map((item, index) => (
          <Items key={index} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Factory;
