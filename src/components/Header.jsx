import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { FaChevronDown, FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import hetkologo from "../assets/images/logo.png"


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container">
      {/* Top Contact Bar */}
      <header className="text-sm ">
        <div className="bg-background">
          <div className="container px-3 py-2 flex flex-col gap-2 md:flex-row md:justify-between md:items-center text-white">
            {/* Left contact info */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer ">
                <CiMail />
                <a href="mailto:hetkofurniture@gmail.com">
                  <p>hetkofurniture@gmail.com</p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlinePhoneInTalk className="cursor-pointer" />
                <a href="tel:+1234567890"> +977 9816413787</a>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex justify-between md:justify-end items-center gap-4 flex-wrap">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1 cursor-pointer">
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

              {/* Cart */}
              <div className="relative h-[40px] w-[40px] md:h-[50px] md:w-[50px] flex items-center justify-center rounded cursor-pointer">
                <BsCart />
                {/* <div className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 aspect-square flex items-center justify-center">
                  2
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto flex items-center justify-between py-2 px-3 bg-white text-black relative">
          {/* Logo */}
         <h1 className="text-[25px] font-extrabold ml-0 text-[#0A174E]  flex items-center gap-2">
            <img src={hetkologo} alt="Hekto logo" className="w-6 h-6" />
            Hekto
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 justify-end items-center flex-1 text-[12px] md:px-45 lg:px-45">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
                      
            <li className="cursor-pointer">
              <Link to="product"> Products</Link>
            </li>

            <li className="cursor-pointer">Blogs</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-0 max-w-xs">
            <input
              type="text"
              className="border-2 px-2 h-8 focus:outline-none w-full"
              placeholder=" "
            />
            <div className="bg-background h-8 flex items-center justify-center px-3 cursor-pointer">
              <CiSearch color="white" size={20} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white text-black shadow-md md:hidden p-4 z-50">
              <ul className="flex flex-col gap-4 text-center text-sm">
                <li className="cursor-pointer">
                <Link to="/">Home</Link>
              </li>
                        
              <li className="cursor-pointer">
                <Link to="product"> Products</Link>
              </li>
              
                <li className="cursor-pointer">Blogs</li>
                <li className="cursor-pointer">Shop</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
              <div className="flex mt-4 gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded px-2 py-1 w-full"
                />
                <button className="bg-background text-white px-3 py-1 rounded">
                  <CiSearch />
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
