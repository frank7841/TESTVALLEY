// SpecificItemDetails.js
import Image from 'next/image';
import React from 'react';

function SubItemDetails({ subItem }) {
  return (
    <div key={subItem.uuid} className="flex flex-col w-3/4 max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex-shrink-0">
        <Image
          className="img-fluid"
          src={subItem.publication.media[0].uri}
          alt={'testvalley'}
          width={100}
          height={100}
        />
      </div>

      <div className="flex-grow flex flex-col justify-between px-6 py-4">
        <div>
          <div className="text-gray-500 text-lg mb-2">{subItem.publication.title}</div>
          <div className='flex '>
            {subItem.publication.priceInfo.discountRate ? (
              <>
                <h2 className="text-red-600 font-semibold">{subItem.publication.priceInfo.discountRate}%</h2>
                <h2 className="text-gray-700 font-semibold">{subItem.publication.priceInfo.discountPrice}<span className='leading-7'>돈</span></h2>
              </>
            ) : (
              <>
                <h2 className="text-gray-700 font-semibold">{subItem.publication.priceInfo.price}<span className='leading-7'>돈</span></h2>
              </>
            )}
          </div>
          <div className='flex space-x-1'>
            <span>*</span>
            <h1>{subItem.publication.rating}</h1>
          </div>
          <div>{subItem.publication.tagsOnDesc.length > 0 && (
            <p className='text-gray-500'>{subItem.publication.tagsOnDesc[0]}</p>
          )}</div>
        </div>
        
        {/* Text at the bottom of the image */}
      </div>
    </div>
  );
}

export default SubItemDetails;
