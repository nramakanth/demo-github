// components/MegaMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  return (
    <div className='w-full'>

    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-6 rounded-lg overflow-hidden">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <h3 className="font-semibold mb-2">Category1</h3>
          <ul>
            <li className='mt-5'><Link to="/products/category1/item1" className="hover:text-red-500 ">Item 1</Link></li>
            <li className='mt-5'><Link to="/products/category1/item2" className="hover:text-red-500 ">Item 2</Link></li>
            <li className='mt-5'><Link to="/products/category1/item3" className="hover:text-red-500 ">Item 3</Link></li>
          </ul>
        </div>
        <div className="col-span-3">
          <h3 className="font-semibold mb-2">Category2</h3>
          <ul>
            <li className='mt-5'><Link to="/products/category2/item1" className="hover:text-red-500 ">Item 1</Link></li>
            <li className='mt-5'><Link to="/products/category2/item2" className="hover:text-red-500 ">Item 2</Link></li>
            <li className='mt-5'><Link to="/products/category2/item3" className="hover:text-red-500 ">Item 3</Link></li>
          </ul>
        </div>
        <div className="col-span-3">
          <h3 className="font-semibold mb-2">Category3</h3>
          <ul>
            <li className='mt-5'><Link to="/products/category3/item1" className="hover:text-red-500 ">Item 1</Link></li>
            <li className='mt-5'><Link to="/products/category3/item2" className="hover:text-red-500 ">Item 2</Link></li>
            <li className='mt-5'><Link to="/products/category3/item3" className="hover:text-red-500 ">Item 3</Link></li>
          </ul>
        </div>
        <div className="col-span-3">
          <h3 className="font-semibold mb-2">Category4</h3>
          <ul>
            <li className='mt-5'><Link to="/products/category4/item1" className="hover:text-red-500 ">Item 1</Link></li>
            <li className='mt-5'><Link to="/products/category4/item2" className="hover:text-red-500 ">Item 2</Link></li>
            <li className='mt-5'><Link to="/products/category4/item3" className="hover:text-red-500 ">Item 3</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>

  );
};

export default MegaMenu;
