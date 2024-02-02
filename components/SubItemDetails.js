// SpecificItemDetails.js
import React from 'react';

function SubItemDetails({ subItem }) {
  return (

    <div key={subItem.uuid} className="max-w-sm rounded overflow-hidden shadow-lg">
  <img
    className="w-full"
    src={subItem.publication.media[0].uri}
    alt="Sunset in the mountains"
  />
  <div className="px-6 py-4">
    <div className="text-gray-500 text-xl mb-2">{subItem.publication.title}</div>
    <div className='flex '>
        <h2 className="text-red-600 font-semibold">{subItem.publication.priceInfo.discountRate}%</h2>
        <h2 className="text-gray-700 font-semibold">{subItem.publication.priceInfo.discountPrice}<span className='leading-7'>돈</span></h2>
    </div>
    <div className='flex space-x-1'>
        <span>*</span>
        <h1>{subItem.publication.rating}</h1>
    </div>
    
  </div>
 
</div>


  );
}

export default SubItemDetails;
