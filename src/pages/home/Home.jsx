import React from "react";
import SimpleSlider from "./Slider1";
import SimpleSlider2 from "./Slider2";
import { BannerData } from "../../assets/mockdata"; // Adjust the path based on your folder structure

function Home() {
  return (
   <div>
     <section className="sliderone">
        <SimpleSlider BannerData={BannerData} />
      </section>


       <section className="sliderone">
        <SimpleSlider2 BannerData={BannerData} />
      </section>

      {/* product cart  */}
      
   </div>
  );
}

export default Home;
