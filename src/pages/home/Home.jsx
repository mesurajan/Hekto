import React from "react";
import SimpleSlider from "./Sliders/Slider1";
import SimpleSlider2 from "./Sliders/Slider2";
import TopCategories from "./Sliders/TopCategories";
import LatestProduct from "./Sliders/LatestProduct";
import { BannerData, BannerData2,latestProducts,TopCategory } from "../../assets/mockdata"; 
import WhatshopOffers from "./utils/WhatshopOffers";
import UniqueFeatures from "./utils/UniqueFeatures";

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

     <section className="mt-20">
      <div>
        blog
      </div>
     </section>


       <section className="sliderone mt-10 md:mt-[40px] lg:mt-[40px]">
        <TopCategories BannerData={TopCategory} />
      </section>

   </div>
  );
}

export default Home;
