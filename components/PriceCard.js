// PriceCard.js
import React from 'react';

import SubItemDetails from './SubItemDetails';

function PriceCard({ data }) {
  return (
    <div className="">
      {data.map((item) => (
        <div key={item.id} className='flex space-y-5 mr-5' >
          <div className="md:ml-24">
          <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
          <h3 className="mb-2 text-lg font-semibold text-gray-500" >{item.subtitle}</h3>
          </div>
          <div >
          {item.items && (
            <div className=" flex">
              {item.items.map((subItem) => (
                <SubItemDetails  key={subItem.uuid} subItem={subItem} />
              ))}
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PriceCard;
