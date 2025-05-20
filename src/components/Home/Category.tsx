import React from 'react';

const Categories = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
];
const Category = () => {
  return (
    <div className="min-w-80 p-4 max-w-96 rounded-sm shadow-lg shadow-black/40">
      <p className="text-primary text-xl">Category</p>
      {/* Line */}
      <div className="w-full h-1 bg-primary mb-4" />

      {/* Categories */}
      <div className="flex flex-wrap gap-4">
        {Categories.map((category, index) => (
          <div
            key={index}
            className="bg-primary select-none hover:cursor-pointer px-2 py-1"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
