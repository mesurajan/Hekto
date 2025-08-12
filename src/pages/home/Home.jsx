import React from "react";
import SimpleSlider from "../home/Slider";
import { BannerData } from "../../assets/mockdata"; // Adjust the path based on your folder structure

function Home() {
  return (
    <div className="container">
      <SimpleSlider BannerData={BannerData} />
    </div>
  );
}

export default Home;
