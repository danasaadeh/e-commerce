"use client";

import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { appRoutes } from "../../../routes";
import { useWishlistStore } from "@/features/wish-list/store";

const Navbar: React.FC = () => {
  const [lang, setLang] = useState("English");
  const navigate = useNavigate();

  // 🧩 Optional: get wishlist count
  const { wishlist } = useWishlistStore();

  const handleWishlistClick = () => {
    navigate(appRoutes.wishList || "/wishlist");
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs md:text-sm py-2 px-4 flex items-center justify-between">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link to="#" className="font-semibold underline ml-1">
            ShopNow
          </Link>
        </p>

        {/* Language Dropdown */}
        <div className="flex items-center cursor-pointer">
          <span>{lang}</span>
          <IoIosArrowDown className="ml-1" size={14} />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4 px-6 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate(appRoutes.home)}
        >
          Exclusive
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to={appRoutes.checkout} className="hover:underline">
            Home
          </Link>
          <Link to={appRoutes.contact} className="hover:underline">
            Contact
          </Link>
          <Link to={appRoutes.about} className="hover:underline">
            About
          </Link>
          <Link to={appRoutes.auth.signUp} className="hover:underline">
            Sign Up
          </Link>
        </nav>

        {/* Right Side: Search + Icons */}
        <div className="flex items-center gap-4 relative">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-md py-2 px-4 pr-10 text-sm w-64 focus:outline-none"
            />
            <AiOutlineSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>

          {/* ❤️ Wishlist Icon */}
          <div
            className="relative cursor-pointer"
            onClick={handleWishlistClick}
          >
            <AiOutlineHeart
              size={22}
              className="hover:text-red-500 transition-colors"
            />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* 🛒 Cart Icon */}
          <AiOutlineShoppingCart className="cursor-pointer" size={22} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
