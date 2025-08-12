import React from "react";
import SimpleSlider from "./Slider1";
import SimpleSlider2 from "./Slider2";
import { BannerData, BannerData2 } from "../../assets/mockdata"; // Adjust the path based on your folder structure

function Home() {
  return (
   <div>
     <section className="sliderone">
        <SimpleSlider BannerData={BannerData} />
      </section>


       <section className="sliderone mt-10 md:mt-[40px] lg:mt-[40px]">
        <SimpleSlider2 BannerData={BannerData2} />
      </section>

      {/* product cart  */}
      
   </div>
  );
}

export default Home;
