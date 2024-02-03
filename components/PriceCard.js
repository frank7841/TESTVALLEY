import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SubItemDetails from './SubItemDetails';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function CustomPrevArrow({ onClick }) {
  return (
    <div className="absolute bottom-0 left-0 ml-2 transform -translate-x-1/2">
      <ChevronLeft className="text-gray-900" onClick={onClick} />
    </div>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <div className="absolute bottom-0 right-0 ml-6 transform -translate-x-1/2">
      <ChevronRight className="text-gray-900" onClick={onClick} />
    </div>
  );
}

function PriceCard({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  return (
    <div className="">
      {data.map((item, index) => (
        <div key={item.id} className='flex space-y-5 mr-5 relative'>
          <div className="md:ml-24 z-0 mt-10">
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <h3 className="mb-2 text-md font-semibold text-gray-500">{item.subtitle}</h3>
          </div>
          <div className='carousel relative'>
            {item.items && (
              <>
                <Carousel
                  className='mx-10'
                  ref={carouselRef}
                  selectedItem={currentSlide}
                  onChange={(index) => setCurrentSlide(index)}
                  autoPlay
                  showThumbs={false}
                  dynamicHeight={false}
                  centerMode={true}
                  showIndicators={false}
                  showStatus={false}
                  centerSlidePercentage={100 / 3}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <CustomPrevArrow key="prev" onClick={onClickHandler} />
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <CustomNextArrow key="next" onClick={onClickHandler} />
                    )
                  }
                >
                  {item.items.map((subItem) => (
                    <div key={subItem.uuid} className='my-10'>
                      <SubItemDetails key={subItem.uuid} subItem={subItem} />
                    </div>
                  ))}
                </Carousel>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PriceCard;
