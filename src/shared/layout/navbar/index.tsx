// Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { appRoutes } from "../../../routes";
import { useWishlistStore } from "@/features/wish-list/store";
import { useIsLoggedIn } from "@/features/auth/hooks/is-logged-in";
import ProfileDropdown from "@/shared/components/profile-drop-down";
import SearchDialog from "@/shared/components/search-dialog";

const Navbar: React.FC = () => {
  const [lang, setLang] = useState("English");
  const [showMenu, setShowMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  const { wishlist } = useWishlistStore();
  const { isLoggedIn } = useIsLoggedIn();

  // ✅ Keyboard shortcut `/` opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpenSearch(true);
      }
      if (e.key === "Escape") setOpenSearch(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".profile-menu")) setShowMenu(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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

        <div className="flex items-center cursor-pointer">
          <span>{lang}</span>
          <IoIosArrowDown className="ml-1" size={14} />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4 px-6 max-w-7xl mx-auto flex items-center justify-between relative">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate(appRoutes.home)}
        >
          Exclusive
        </h1>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to={appRoutes.home}>Home</Link>
          <Link to={appRoutes.cart}>Contact</Link>
          <Link to={appRoutes.about}>About</Link>
          {!isLoggedIn && <Link to={appRoutes.auth.signUp}>Sign Up</Link>}
        </nav>

        <div className="flex items-center gap-4 relative">
          {/* 🔍 Search Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search products... (Press /)"
              className="border rounded-md py-2 px-4 pr-10 text-sm w-64 focus:outline-none cursor-pointer"
              readOnly
              onClick={() => {
                if (!openSearch) {
                  // Delay ensures dialog opens after input loses focus
                  setTimeout(() => setOpenSearch(true), 100);
                }
              }}
            />
            <AiOutlineSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              size={18}
              onClick={() => setOpenSearch(true)}
            />
          </div>

          {/* ❤️ Wishlist */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate(appRoutes.wishList || "/wishlist")}
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

          {/* 🛒 Cart */}
          <AiOutlineShoppingCart
            className="cursor-pointer hover:text-blue-500 transition-colors"
            size={22}
          />

          {isLoggedIn && (
            <div className="relative profile-menu">
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="cursor-pointer focus:outline-none"
              >
                <FiUser
                  size={22}
                  className={`transition-colors ${
                    showMenu ? "text-blue-500" : "hover:text-blue-500"
                  }`}
                />
              </button>

              {showMenu && (
                <ProfileDropdown onClose={() => setShowMenu(false)} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* 🔍 Search Dialog */}
      <SearchDialog open={openSearch} onClose={() => setOpenSearch(false)} />
    </header>
  );
};

export default Navbar;
