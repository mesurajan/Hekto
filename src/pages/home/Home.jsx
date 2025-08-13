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
      <section className="container mt-6 mb-6 px-4">
        <div className="main-div">
          {/* Header */}
          <header className="text-center text-2xl sm:text-3xl md:text-[35px] font-semibold text-[#0A174E]">
            What Shop Offers!
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* 1st */}
            <div className="text-[#0A174E] flex flex-col items-center text-center gap-3 p-4 bg-white rounded shadow-sm">
              <img src={Car} alt="Support" className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-24" />
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">24/7 Support</h1>
              <p className="text-sm sm:text-base md:text-[13px]">
                We are always here to help you with any questions or concerns, anytime.
              </p>
            </div>

            {/* 2nd */}
            <div className="text-[#0A174E] flex flex-col items-center text-center gap-3 p-4 bg-white rounded shadow-sm">
              <img src={Bonus} alt="Bonus" className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-24" />
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Exclusive Bonus</h1>
              <p className="text-sm sm:text-base md:text-[13px]">
                Enjoy special rewards and offers for our loyal customers.
              </p>
            </div>

            {/* 3rd */}
            <div className="text-[#0A174E] flex flex-col items-center text-center gap-3 p-4 bg-white rounded shadow-sm">
              <img src={Achivement} alt="Achievement" className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-24" />
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Our Achievements</h1>
              <p className="text-sm sm:text-base md:text-[13px]">
                Our team consistently delivers outstanding results—efficient, reliable, and committed to excellence.
              </p>
            </div>

            {/* 4th */}
            <div className="text-[#0A174E] flex flex-col items-center text-center gap-3 p-4 bg-white rounded shadow-sm">
              <img src={Call} alt="Call Support" className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-24" />
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Call Support</h1>
              <p className="text-sm sm:text-base md:text-[13px]">
                Reach our support team anytime via phone—quick, reliable, and friendly service.
              </p>
            </div>
          </div>
        </div>
      </section>     
   </div>
  );
}

export default Home;
