import React from "react";
import SimpleSlider from "./Sliders/Slider1";
import SimpleSlider2 from "./Sliders/Slider2";
import TopCategories from "./Sliders/TopCategories";
import LatestProduct from "./Sliders/LatestProduct";
import DiscountItem from "./Sliders/DisItem";
import { BannerData, BannerData2,latestProducts,TopCategory } from "../../assets/mockdata"; 
import WhatshopOffers from "./utils/WhatshopOffers";
import UniqueFeatures from "./utils/UniqueFeatures";
import BgImage from "../../assets/images/newsLetter.png"; 
import BrandPromotion from "../../assets/images/BrandPromotion.png";
import {Link} from 'react-router-dom'


function Home() {
  return (
   <div>


    {/* Main slider */}
     <section className="sliderone ">
        <SimpleSlider BannerData={BannerData} />
      </section>


    {/* 2nd slider */}
       <section className="sliderone mt-10 md:mt-[40px] lg:mt-[40px]">
        <SimpleSlider2 BannerData={BannerData2} />
      </section>


       {/* Latest Products component */}
      <section className="mt-18">
        <LatestProduct BannerData={latestProducts} />
      </section>

     {/* What shop Offers */}
        <section className="mt-18">
        <WhatshopOffers />
       </section>

      {/* Unique Features  */}
        <section className="mt-18">
        <UniqueFeatures />
       </section>


        <section className=" sliderone mt-10 md:mt-[40px] lg:mt-[40px]">
        <DiscountItem/>
      </section>


      {/* Top categories */}
       <section className=" sliderone mt-10 md:mt-[40px] lg:mt-[40px]">
        <TopCategories BannerData={TopCategory} />
      </section>

      {/* Background PNG section */}
      <section
        className=" container mt-20 bg-no-repeat bg-center bg-cover h-[350px] sm:h-[400px] md:h-[400px] "
        style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="flex flex-row flex-wrap md:flex-col   items-center justify-center  h-full ">
        <div className="#">
          <h2 className=" text-[#0A174E] text-center text-2xl sm:text-2xl md:text-4xl font-bold sm:mx-auto md:max-w-[650px] mt-12">
            Get Leatest Update By Subscribing Our Newslater
          </h2>
        </div>

         <div className="py-2 md:py-10">
          <Link to="/shop"> 
              <button className="primary-btn px-10">Shop Now</button>
          </Link>
        </div>
      </div>
      </section>


      {/*  Brand promotion */}
      <section>
        <div className="container flex items-center justify-center mt-10">
          <img src={BrandPromotion} alt="brandpromotion" className="sm:h-10 md:h-20 sm:px-4 md:px-10"/>
        </div>
      </section>


      {/* Latest Blog */}

   </div>
  );
}

export default Home;
