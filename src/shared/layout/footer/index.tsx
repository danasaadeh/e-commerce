import React from "react";
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
            <h4 className="text-lg font-semibold mb-3">Exclusive</h4>
            <p className="text-sm mb-3">Subscribe</p>

            <p className="text-xs text-gray-300 mb-4">
              Get 10% off your first order
            </p>

            <form
              className="flex items-center gap-2"
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
                  className="w-full bg-transparent border border-gray-600 rounded-md py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent p-2 border border-gray-600 rounded-md"
                >
                  <EmailOutlinedIcon fontSize="small" />
                </button>
              </div>
            </form>
          </div>

          {/* Three columns in middle */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h5 className="text-sm font-semibold mb-3">Support</h5>
              <ul className="text-xs text-gray-300 space-y-2">
                {links.support.map((item, idx) => (
                  <li key={idx} className={idx === 0 ? "" : ""}>
                    {idx === 1 ? (
                      // make email clickable
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
              <h5 className="text-sm font-semibold mb-3">Account</h5>
              <ul className="text-xs text-gray-300 space-y-2">
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
              <h5 className="text-sm font-semibold mb-3">Quick Link</h5>
              <ul className="text-xs text-gray-300 space-y-2">
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
            <h4 className="text-sm font-semibold mb-3">Download App</h4>
            <p className="text-xs text-gray-300 mb-3">
              Save $3 with App New User Only
            </p>

            <div className="flex items-start gap-3">
              {/* QR */}
              <div className="flex-shrink-0">
                <img
                  src="src/assets/images/qr.jpg"
                  alt="qr code"
                  className="w-20 h-20 object-cover rounded-sm border border-gray-700"
                />
              </div>

              <div className="flex-1 space-y-2">
                <a href="#" className="inline-block">
                  <img
                    src="src/assets/images/google_play.png"
                    alt="Get it on Google Play"
                    className="h-10 object-contain"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="src/assets/images/app_store.png"
                    alt="Download on the App Store"
                    className="h-10 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4 text-gray-300">
              <a aria-label="facebook" href="#" className="hover:text-white">
                <FacebookIcon fontSize="small" />
              </a>
              <a aria-label="twitter" href="#" className="hover:text-white">
                <TwitterIcon fontSize="small" />
              </a>
              <a aria-label="instagram" href="#" className="hover:text-white">
                <InstagramIcon fontSize="small" />
              </a>
              <a aria-label="linkedin" href="#" className="hover:text-white">
                <LinkedInIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="border-gray-800 mt-8" />

        {/* copyright / bottom row */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>© Copyright Rimel 2022. All right reserved</div>

          <div className="flex items-center gap-4">
            <Link to="#" className="hover:underline">
              Privacy
            </Link>
            <Link to="#" className="hover:underline">
              Terms
            </Link>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
