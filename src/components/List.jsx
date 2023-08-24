import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const List = ({ items, removeItem }) => {
  return (
    <div className='px-5'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div
            className='text-left py-3  flex items-center gap-2 border-b-2 justify-between'
            key={id}
          >
            <span className='text-lg'>{title}</span>
            <button className='text-[#ed6b5c]' onClick={() => removeItem(id)}>
              <BsFillTrashFill />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
