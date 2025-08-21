import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SimpleSlider2({ BannerData = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

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
      <ul className="flex justify-center gap-4 mt-6 ">
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
    <div className="px-4 mx-auto slider-container max-w-7xl md:px-0">
      <Slider ref={sliderRef} {...settings}>
        {BannerData.map((slide) => (
          <div key={slide.id}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6">
              {slide.chairs.map((chair) => (
                <div
                  key={chair.id}
                  className="flex flex-col items-center justify-center p-4 rounded bg-background-secondary hover:border-2 hover:border-blue-900"
                >
                  <img
                    src={chair.chairimage}
                    alt={chair.title}
                    className="w-full max-w-[220px] max-h-[240px] mt-0"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-sm font-semibold">{chair.title}</h3>
                    <p className="text-xs text-gray-600">{chair.price}</p>
                  </div>
                  <Link to={`/productDetails/${chair.id}`}>
                  <button className="mt-6 primary-btn">View details</button>
                </Link>
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
