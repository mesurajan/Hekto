import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider2({ BannerData = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
//   const totalSlides = BannerData.length;

 const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  beforeChange: (_, next) => setCurrentSlide(next),
  appendDots: () => (
    <ul className="flex justify-center gap-2 mt-10">
      {BannerData.map((_, index) => {
        const isActive = index === currentSlide;
        return (
          <li
            key={index}
            onClick={() => sliderRef.current?.slickGoTo(index)}
            className={`cursor-pointer transition-colors duration-300 rounded-sm ${
              isActive ? "bg-[#0A174E]" : "bg-gray-400"
            }`}
            style={{
              width: "16px",
              height: "4px",
            }}
          />
        );
      })}
    </ul>
  ),
};
  if (!BannerData.length) return null;

  return (
    <div className="slider-container max-w-7xl mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {BannerData.map((slide) => (
          <div key={slide.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4">
              {slide.chairs.map((chair) => (
                <div
                  key={chair.id}
                  className="bg-background-secondary flex flex-col justify-center items-center hover:border-2 hover:border-blue-900 p-4 rounded"
                >
                  <img
                    src={chair.chairimage}
                    alt={chair.title}
                    className="w-full max-w-[220px] h-auto mt-0"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="font-semibold text-sm">{chair.title}</h3>
                    <p className="text-xs text-gray-600">{chair.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider2;
