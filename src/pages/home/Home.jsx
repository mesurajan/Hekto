import React from "react";
import SimpleSlider from "./Sliders/Slider1";
import SimpleSlider2 from "./Sliders/Slider2";
import LatestProduct from "./Sliders/LatestProduct";
import { BannerData, BannerData2,latestProducts } from "../../assets/mockdata"; // Adjust the path based on your folder structure
import Car from "../../assets/images/offer/car.png";
import Bonus from "../../assets/images/offer/bonus.png";
import Achivement from "../../assets/images/offer/achivement.png";
import Call from "../../assets/images/offer/call.png";

function Home() {
  return (
   <div>


    {/* Main slider */}
     <section className="sliderone">
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
      <section className="container mt-6 mb-6">
        <div className="main-div">
          {/* header section */}
          <div>
              <header className="text-center text-[35px] font-semibold text-[#0A174E] ">
              What Shop Offers !
              </header>
          </div>


        <div className="grid grid-cols-4 gap-2 mt-10 max-h-[300px]"> 
         <div className="text-[#0A174E] flex flex-col items-center justify-center h-auto gap-2 p-4 ">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={Car} alt="Support" className="w-25 h-16 sm:w-20 sm:h-20 md:w-30 md:h-20" />
          </div>

          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">24/7 Support</h1>
            <p className="text-sm sm:text-[13px] md:text-[13px]">
              We are always here to help you with any questions or concerns, anytime.
            </p>
          </div>
        </div>


        {/* 2nd */}
         <div className="text-[#0A174E] flex flex-col items-center justify-center h-auto gap-2 p-4">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={Bonus} alt="Support" className="w-25 h-16 sm:w-20 sm:h-20 md:w-30 md:h-20" />
          </div>

          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">24/7 Support</h1>
          <p className="text-sm sm:text-[13px] md:text-[13px]">
              We are always here to help you with any questions or concerns, anytime.
            </p>
          </div>
        </div>

        {/* 3rd */}
          <div className="text-[#0A174E] flex flex-col items-center justify-center h-auto gap-2 p-4">
          <div className="flex justify-center">
            <img src={Achivement} alt="Support" className="w-25 h-16 sm:w-20 sm:h-20 md:w-30 md:h-20" />
          </div>
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">24/7 Support</h1>
            <p className="text-justify text-sm sm:text-[13px] md:text-[13px]">
             Our team consistently delivers outstanding results. We excel in completing projects 
             efficiently, providing top-quality service, and exceeding expectations—reliable, 
             dedicated, and committed to excellence.
            </p>
          </div>
        </div>


        {/* 4th */}
          <div className="text-[#0A174E] flex flex-col items-center justify-center h-auto gap-2 p-4">
         
          <div className="flex justify-center">
            <img src={Call} alt="Support" className="w-25 h-16 sm:w-20 sm:h-20 md:w-30 md:h-20" />
          </div>
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">24/7 Support</h1>
            <p className="text-justify text-sm sm:text-[13px] md:text-[13px]">
              Reach our support team anytime via phone. We're ready to assist you with orders, inquiries, or any issues you face—quick, reliable, and friendly service.
            </p>
          </div>
        </div>
        </div>
      </div>

      </section>
      
      
      
   </div>
  );
}

export default Home;
