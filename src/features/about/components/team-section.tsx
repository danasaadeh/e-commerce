import type React from "react";
// ❌ Remove MUI Icon imports
// import { Twitter, Instagram, LinkedIn } from "@mui/icons-material";

// ✅ Font Awesome imports - Use the Brand icons you imported in the Footer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF, // I'll add Facebook as a common option
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const team = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: "src/assets/images/about/team/woman.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: "src/assets/images/about/team/man.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: "src/assets/images/about/team/man2.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Image container */}
            <div className="w-full bg-gray-100 rounded-lg mb-6 overflow-hidden">
              <img
                src={member.img || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Member details */}
            <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>

            {/* Social Icons (UPDATED) */}
            <div className="flex gap-4">
              {" "}
              {/* Increased gap slightly for better visual separation */}
              {/* Twitter */}
              <a
                href="#"
                className="text-black hover:text-[#db4444] transition-colors" // Use your primary red color
                aria-label="Twitter"
              >
                {/* Using Font Awesome Icon */}
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-black hover:text-[#db4444] transition-colors"
                aria-label="Instagram"
              >
                {/* Using Font Awesome Icon */}
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="text-black hover:text-[#db4444] transition-colors"
                aria-label="LinkedIn"
              >
                {/* Using Font Awesome Icon */}
                <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
