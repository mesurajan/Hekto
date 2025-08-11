import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BiHeartSquare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import lightimage from '../assets/images/lightimage.png';
import { CiSearch } from "react-icons/ci";
import banner from '../assets/images/banner.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header >
        <div className="bg-background hidden md:block text-[12px] h-[35px]">
          <div className="container mx-auto flex justify-between text-white items-center py-2">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 cursor-pointer ml-40">
                <CiMail />
                <a href="mailto:hetkofurniture@gmail.com">
                  <p>hetkofurniture@gmail.com</p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlinePhoneInTalk className="cursor-pointer" />
                <a href="tel:+1234567890">
                  {" "}
                  <p>+977 9816413787</p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-10 text-[12px] mr-4 md:mr-40">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <p>English</p>
                  <FaChevronDown />
                </div>
                <div className="flex items-center gap-2">
                  <p>USD</p>
                  <FaChevronDown />
                </div>

                  <Link
                  to="/login"
                  className="flex items-center gap-2 hover:text-pink-500 cursor-pointer"
                >
                  <p>Login</p>
                  <FaRegUser />
                </Link>

                <div className="flex items-center gap-2">
                  <p>Wishlist</p>
                  <FaRegHeart />
                </div>
              </div>

              <div>
                <BsCart />
              </div>
            </div>
          </div>
        </div>

        <section className=" container  flex justify-between items-center  mx-auto h-[40px] ">
          <div className="flex items-center gap-24">
            <h1 className="text-[20px] font-bold ml-4 md:ml-40">Hekto</h1>
            <nav className="flex items-center gap-5 list-none text-[12px]">
              <li>Home</li>
              <li>Products</li>
              <li>Products</li>
              <li>Blogs</li>
              <li>Shop</li>
              <li>Contact</li>
            </nav>
          </div>

          <div className="flex items-center mr-40">
            <input 
                type="text" 
                className="border-2  px-2 h-8 focus:outline-none" 
                placeholder=" "
            />
              <div className="bg-background h-8 flex items-center justify-center  px-3 cursor-pointer">
                <CiSearch color="white"size={20} />
            </div>
            </div>
        </section>
      </header>

    <section className="bg-backgroundlite max-w-7xl mx-auto px-4 md:px-8">
    <div className="maindiv p-0 m-0">
        <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-6 md:gap-0">
            <div className="px-4 md:px-24">
                <img src={lightimage} alt="lightmage" className="w-full max-w-[220px] h-auto mt-0" /> 
            </div>

    <div className="subheader w-full md:w-[550px] py-8 md:py-[100px]">
    <div className="py-[2px]">
    <p className="text-[12px]">Best furniture For your Castle...</p>
    </div>

   <div className="text-[24px] md:text-[40px] font-bold">
    <h1>New  Furniture  Collection </h1>
    <h1>Trends  in  2020</h1>
    </div>
            
    <div className="py-[15px]">
    <p className="text-[12px]">Discover the finest furniture crafted to make your home a true castle. 
    Explore our new collection featuring the latest trends of 2020 stylish, comfortable, 
    and made just for you.
    </p>
    </div>

    <div className="py-[25px]">
    <button className="primary-btn px-4 py-2 text-sm md:text-base">Shop Now</button>
    </div>
         
    </div>

    <div className="sofaimage">
    <img src={banner} alt="sofaimage" className="w-full max-w-[350px] h-auto" />  
    </div>

    </div>

     </div>
    </section>
</div>
  );
}

export default Header;