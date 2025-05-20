import React from 'react';

const Filters = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl">
          Luna Verified Factories of All Categories {'>'}
        </h4>
        <p>In Total (xxx)</p>
      </div>

      <div className="flex items-center justify-between shadow-lg shadow-black/40 px-8 py-4 rounded-xl">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="text-nowrap">Categories (Something): </p>
            <div className="flex flex-wrap gap-2">
              <FilterButton selected={true} />
              <FilterButton selected={false} />
              <FilterButton selected={true} />
              <FilterButton selected={false} />
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-nowrap">Product Type (Something): </p>
            <div className="flex flex-wrap gap-2">
              <FilterButton selected={true} />
              <FilterButton selected={false} />
              <FilterButton selected={true} />
              <FilterButton selected={false} />
            </div>
          </div>
        </div>
        <button className="bg-primary h-fit px-2 py-1 rounded-xl font-bold">
          Cannot Find What You Want
        </button>
      </div>
    </div>
  );
};

export default Filters;

const FilterButton = ({ selected }: { selected: boolean }) => {
  return (
    <button
      className={`${
        selected && 'bg-primary'
      } px-2 py-1 rounded-xl font-bold text-nowrap`}
    >
      Beauty and perosnal care (6)
    </button>
  );
};
