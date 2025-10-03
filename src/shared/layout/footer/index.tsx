"use client";

import type React from "react";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = {
  support: [
    "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ],
  account: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  quick: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Newsletter / Exclusive (Left) */}
          <div className="md:col-span-3">
            <h4 className="text-2xl font-bold mb-4">Exclusive</h4>
            <p className="text-base font-medium mb-4">Subscribe</p>

            <p className="text-sm text-gray-300 mb-4">
              Get 10% off your first order
            </p>

            <form
              className="flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                // handle subscribe
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <div className="relative w-full">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-white rounded py-3 px-4 pr-12 text-sm placeholder:text-gray-400 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <EmailOutlinedIcon fontSize="small" />
                </button>
              </div>
            </form>
          </div>

          {/* Three columns in middle */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="text-base font-medium mb-4">Support</h5>
              <ul className="text-sm text-gray-300 space-y-3">
                {links.support.map((item, idx) => (
                  <li key={idx}>
                    {idx === 1 ? (
                      <a href={`mailto:${item}`} className="hover:underline">
                        {item}
                      </a>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-base font-medium mb-4">Account</h5>
              <ul className="text-sm text-gray-300 space-y-3">
                {links.account.map((l) => (
                  <li key={l}>
                    <Link to="#" className="hover:underline">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-base font-medium mb-4">Quick Link</h5>
              <ul className="text-sm text-gray-300 space-y-3">
                {links.quick.map((l) => (
                  <li key={l}>
                    <Link to="#" className="hover:underline">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Download App / QR (Right) */}
          <div className="md:col-span-3">
            <h4 className="text-base font-medium mb-4">Download App</h4>
            <p className="text-xs text-gray-400 mb-2">
              Save $3 with App New User Only
            </p>

            <div className="flex items-start gap-2 mb-6">
              {/* QR */}
              <div className="flex-shrink-0">
                <img
                  src="src/assets/images/footer/qr.jpg"
                  alt="qr code"
                  className="w-20 h-20 object-cover rounded border border-gray-700"
                />
              </div>

              <div className="flex flex-col gap-1">
                <a href="#" className="inline-block">
                  <img
                    src="src/assets/icons/GooglePlay.svg"
                    alt="Get it on Google Play"
                    className="h-9 object-contain"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="src/assets/icons/AppStore.svg"
                    alt="Download on the App Store"
                    className="h-9 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6 text-white">
              <a aria-label="facebook" href="#" className="hover:text-gray-300">
                <FacebookIcon fontSize="medium" />
              </a>
              <a aria-label="twitter" href="#" className="hover:text-gray-300">
                <TwitterIcon fontSize="medium" />
              </a>
              <a
                aria-label="instagram"
                href="#"
                className="hover:text-gray-300"
              >
                <InstagramIcon fontSize="medium" />
              </a>
              <a aria-label="linkedin" href="#" className="hover:text-gray-300">
                <LinkedInIcon fontSize="medium" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
            <div className="flex items-center gap-1">
              <span>©</span>
              <span>Copyright Rimel 2022. All right reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
