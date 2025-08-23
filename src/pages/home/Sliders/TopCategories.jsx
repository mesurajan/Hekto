import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Apps/Reducers/cartSlice";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";


function TopCategories({ BannerData = [], onAddToWishlist  }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

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

      const handleAddToCart = (chair) => {
      dispatch(
        addToCart({
          id: chair.id,
          title: chair.title,
          price: chair.price,
          chairimage: chair.chairimage,
        })
      );
    };

  return (
    <div className="px-4 mx-auto slider-container max-w-7xl md:px-0">
      <div>
        <h1 className="text-center text-[35px] font-semibold  sm:py-8  md:py-10 text-[#0A174E]">Top Categories</h1>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {BannerData.map((slide) => (
          <div key={slide.id}>
            <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6">
              {slide.chairs.map((chair) => (
                <div
                  key={chair.id}
                  className="relative flex flex-col items-center justify-center p-4 rounded bg-background-secondary hover:border-2 hover:border-blue-900"
                >
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => onAddToWishlist?.(chair)}
                      className="p-2 bg-white rounded-full shadow hover:bg-pink-100"
                      title="Add to Wishlist"
                    >
                      <FaRegHeart className="text-pink-500" />
                    </button>
                    <button
                      onClick={() => handleAddToCart(chair)} 
                      className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
                      title="Add to Cart"
                    >
                      <BsCart className="text-blue-600" />
                    </button>
                  </div>

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

export default TopCategories;
