import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SubItemDetails from './SubItemDetails';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function CustomPrevArrow({ onClick }) {
  return (

     <ChevronLeft color='red' className="absolute left-0  top-1/2 z-50" onClick={onClick}/>

  );
}

function CustomNextArrow({ onClick }) {
  return (
     <ChevronRight color='red' className="absolute left-1 top-1/2" onClick={onClick}/>
   
  );
}

function PriceCard({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="z-10">
      {data.map((item, index) => (
        <div key={item.id} className='flex space-y-5 mr-5'>
          <div className="md:ml-24 z-0">
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <h3 className="mb-2 text-md font-semibold text-gray-500">{item.subtitle}</h3>
          </div>
          <div className='carousel'>
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
                  centerSlidePercentage={100 / 4}
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
                    <div key={subItem.uuid}>
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
