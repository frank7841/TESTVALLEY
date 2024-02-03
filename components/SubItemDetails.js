// SpecificItemDetails.js
import Image from 'next/image';
import React from 'react';

function SubItemDetails({ subItem }) {
  return (
    <div key={subItem.uuid} className="flex flex-col w-3/4 max-w-sm rounded overflow-hidden shadow-lg">
           <div className="flex-shrink-0 relative">
        <Image
          className="img-fluid"
          src={subItem.publication.media[0].uri}
          alt={'testvalley'}
          width={100}
          height={100}
        />
        {subItem.publication.tagsOnImage.length > 0 && (
        <div className="absolute bottom-0 left-0 p-2 text-white bg-[#00D094]">
            {subItem.publication.tagsOnImage[0]}
        </div>
        )}
      </div>


      <div className="flex-grow flex flex-col justify-between px-6 py-4">
        <div>
          <div className="text-gray-500 text-lg mb-2">{subItem.publication.title}</div>
          <div className='flex '>
            {subItem.publication.priceInfo.discountRate ? (
              <>
                <h2 className="text-red-600 font-semibold">{subItem.publication.priceInfo.discountRate}% <span className="text-gray-700 font-semibold">{subItem.publication.priceInfo.discountPrice}</span> <span className='leading-7 text-gray-500'>돈</span></h2>
                
              </>
            ) : (
              <>
                <h2 className="text-gray-500 font-semibold">{subItem.publication.priceInfo.price}<span className='leading-7'>돈</span></h2>
              </>
            )}
          </div>
          <div className='flex space-x-1'>
            <span className="font-semibold text-gray-500 text-md">*</span>
            <h1 className='text-gray-500 font-semibold'>{subItem.publication.rating}</h1>
          </div>
          {subItem.publication.tagsOnDesc.length > 0 && (
            <p className='text-gray-500  flex justify-start'>{subItem.publication.tagsOnDesc[0]}</p>
          )}
        </div>
        
        {/* Text at the bottom of the image */}
      </div>
    </div>
  );
}

export default SubItemDetails;
