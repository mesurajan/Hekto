import React from 'react'
import BigSofa from "../../../assets/images/chairs/Bigsofa.png";
function UniqueFeatures() {
  return (
    <div>
         {/* Unique Features  */}
     <section className="container bg-backgroundlite mx-auto mt-25 px-4">
      <div className=" flex flex-col md:flex-row items-center justify-center lg:flex-row  ">
        <div className="#">
          <img src={BigSofa} alt="bigsofa" className="#"/>
        </div>

        <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-[#0A174E] max-w-full sm:max-w-sm md:max-w-[450px] text-center md:text-left">
            Unique Features of Latest &
            Trending Products
          </h1>

          <ul className="sm:py-6 md:py-8 lg:py-8 text-[15px] text-[#0A174E] max-w-full sm:max-w-sm md:max-w-[450px] md:text-left">
            <li>
              All frames constructed with hardwood solids and laminates
            </li>
            <li>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </li>
            <li>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

          <div className="sm:mt-3 flex flex-row items-center justify-centre gap-10">
          {/* Button */}
          <div>
            <button className="primary-btn sm:py-10 md:py-4 md:px-12">Add to Cart</button>
          </div>

          {/* Title & Price */}
          <div className="text-center sm:text-left">
            <h1 className="font-semibold">B&B Italian Sofa</h1>
            <p className="text-gray-600">$32.00</p>
          </div>
        </div>

        </div>
      </div>
     </section>
    </div>
  )
}

export default UniqueFeatures