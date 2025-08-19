import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { FaChevronDown, FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import hetkologo from "../assets/images/logo.png"
import { useSelector } from "react-redux";



function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);

  console.log("This is user gloabl state",user);

  return (
    <div className="container">
      {/* Top Contact Bar */}
      <header className="text-sm ">
        <div className="bg-background">
          <div className="container flex flex-col gap-2 px-3 py-2 text-white md:flex-row md:justify-between md:items-center">
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
            <div className="flex flex-wrap items-center justify-between gap-4 md:justify-end">
              <div className="flex flex-wrap items-center gap-4">
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
                    className="flex items-center gap-2 cursor-pointer hover:text-pink-500"
                  >
                    {user.userName? (
                      <p>{user.userName}</p>
                    ) : (
                      <p>Login</p>
                    )}
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
                {/* <div className="absolute flex items-center justify-center h-4 text-xs text-white bg-red-500 rounded-full top-1 right-1 aspect-square">
                  2
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container relative flex items-center justify-between px-3 py-2 mx-auto text-black bg-white">
          {/* Logo */}
         <h1 className="text-[25px] font-extrabold ml-0 text-[#0A174E]  flex items-center gap-2">
            <img src={hetkologo} alt="Hekto logo" className="w-6 h-6" />
            Hekto
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 justify-end items-center flex-1 text-[12px] md:px-45 lg:px-45">
            <li className="cursor-pointer">
              <NavLink to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                      : "text-black hover:text-[#0A174E]"
                   }
                    >Home</NavLink>
            </li>
                      
            <li className="cursor-pointer">
              <NavLink to="product" className={({ isActive }) =>
                    isActive
                      ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                      : "text-black hover:text-[#0A174E]"
                   }
                   > Products</NavLink>
            </li>

            <li className="cursor-pointer">
              <NavLink to ='Blogs' className={({ isActive }) =>
                    isActive
                      ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                      : "text-black hover:text-[#0A174E]"
                   }>Blogs
                </NavLink></li>

            <li className="cursor-pointer">
              <NavLink to="shop" className={({ isActive }) =>
                    isActive
                      ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                      : "text-black hover:text-[#0A174E]"
                   }
                   > Shop</NavLink>
            </li>
           
            <li className="cursor-pointer">
              <NavLink to='Contact'className={({ isActive }) =>
                    isActive
                      ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                      : "text-black hover:text-[#0A174E]"
                   }>Contact
                </NavLink></li>
          </ul>

          {/* Search Bar - Desktop */}
          <div className="items-center justify-end flex-1 hidden max-w-xs gap-0 md:flex">
            <input
              type="text"
              className="w-full h-8 px-2 border-2 focus:outline-none"
              placeholder=" "
            />
            <div className="flex items-center justify-center h-8 px-3 cursor-pointer bg-background">
              <CiSearch color="white" size={20} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute left-0 z-50 w-full p-4 text-black bg-white shadow-md top-full md:hidden">
              <ul className="flex flex-col gap-4 text-sm text-center">
                <li className="cursor-pointer">
                <NavLink to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                        : "text-black hover:text-[#0A174E]"
                    }
                      >Home</NavLink>
              </li>
                        
              <li className="cursor-pointer">
                <NavLink to="product" className={({ isActive }) =>
                      isActive
                        ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                        : "text-black hover:text-[#0A174E]"
                    }
                    > Products</NavLink>
              </li>

              <li className="cursor-pointer">
                <NavLink to ='Blogs' className={({ isActive }) =>
                      isActive
                        ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                        : "text-black hover:text-[#0A174E]"
                    }>Blogs
                  </NavLink></li>

              <li className="cursor-pointer">
                <NavLink to="shop" className={({ isActive }) =>
                      isActive
                        ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                        : "text-black hover:text-[#0A174E]"
                    }
                    > Shop</NavLink>
              </li>
            
              <li className="cursor-pointer">
                <NavLink to='Contact'className={({ isActive }) =>
                      isActive
                        ? "text-[#0A174E] font-semibold border-b-2 border-[#0A174E] pb-1"
                        : "text-black hover:text-[#0A174E]"
                    }>Contact
                  </NavLink></li>
              </ul>

              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-2 py-1 border rounded"
                />
                <button className="px-3 py-1 text-white rounded bg-background">
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
