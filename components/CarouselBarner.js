// CarouselBanner.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
const CustomNextArrow = (props) => (
  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
    <ChevronRight color='red' onClick={props.onClick} />
  </div>
);

const CustomPrevArrow = (props) => (
  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer">
   <ChevronLeft color='green' onClick={() => { 
      console.log("Prev Arrow Clicked"); 
      props.onClick(); 
    }} />
  </div>
);

const CarouselBanner = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    nextArrow: <CustomNextArrow/>, // Added a custom class for styling
    prevArrow: <CustomPrevArrow/>
  };


  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item.mainBannerId} >
          <img src={item.pcImageUrl} alt={item.title} />
          
        </div>
      ))}
    </Slider>
  );
};

export default CarouselBanner;
